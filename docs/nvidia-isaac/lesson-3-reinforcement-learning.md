# Reinforcement Learning for Robot Control

## Overview

This lesson covers reinforcement learning techniques for robotic control using NVIDIA Isaac, focusing on training policies that can be deployed on physical robots.

## Reinforcement Learning Fundamentals

### Core Concepts

#### **Markov Decision Process (MDP)**
- **States (S)**: Robot configuration and environment state
- **Actions (A)**: Control commands (joint velocities, forces)
- **Rewards (R)**: Task-specific reward functions
- **Transitions (P)**: Environment dynamics

```python
# MDP definition for robotic control
class RoboticMDP:
    def __init__(self):
        self.state_space = "robot_joint_angles + object_positions"
        self.action_space = "joint_torques"
        self.reward_function = self.compute_reward

    def compute_reward(self, state, action, next_state):
        # Reward for task completion and efficiency
        task_reward = self.task_completion_reward(next_state)
        efficiency_reward = self.energy_efficiency_reward(action)
        safety_reward = self.safety_reward(next_state)

        return task_reward + efficiency_reward + safety_reward
```

### Policy Learning

#### **Policy Types**
- **Deterministic policies**: π(s) → a
- **Stochastic policies**: π(a|s) → probability distribution
- **Parameterized policies**: Neural networks approximating π

## Isaac Sim for RL Training

### Simulation Environment Setup

#### **RL Environment Creation**
```python
import gym
from omni.isaac.gym import VecEnvBase

class RoboticEnv(VecEnvBase):
    def __init__(self, config):
        super().__init__(config)
        self.task = RoboticManipulationTask()

    def step(self, actions):
        # Apply actions to simulation
        self.task.apply_actions(actions)

        # Step simulation
        self.world.step()

        # Get observations and rewards
        observations = self.task.get_observations()
        rewards = self.task.compute_rewards()
        dones = self.task.check_terminations()

        return observations, rewards, dones, {}

    def reset(self):
        # Reset environment
        self.task.reset()
        return self.task.get_observations()
```

### Reward Function Design

#### **Task-Specific Rewards**
```python
def compute_reward(self, state, action, next_state):
    reward = 0

    # Distance to goal
    goal_distance = np.linalg.norm(next_state['end_effector_pos'] - self.goal_pos)
    reward -= goal_distance * 0.1  # Negative reward for distance

    # Success bonus
    if goal_distance < 0.05:  # 5cm threshold
        reward += 100  # Large positive reward for success

    # Energy penalty
    energy_consumption = np.sum(np.abs(action))
    reward -= energy_consumption * 0.01

    # Safety penalty
    if self.collision_detected(next_state):
        reward -= 50

    return reward
```

## Training Algorithms

### Proximal Policy Optimization (PPO)

#### **PPO Implementation**
```python
import torch
import torch.nn as nn

class PPOAgent:
    def __init__(self, state_dim, action_dim):
        self.actor = nn.Sequential(
            nn.Linear(state_dim, 256),
            nn.ReLU(),
            nn.Linear(256, 256),
            nn.ReLU(),
            nn.Linear(256, action_dim),
            nn.Tanh()  # For continuous actions
        )

        self.critic = nn.Sequential(
            nn.Linear(state_dim, 256),
            nn.ReLU(),
            nn.Linear(256, 256),
            nn.ReLU(),
            nn.Linear(256, 1)
        )

    def select_action(self, state):
        with torch.no_grad():
            action_mean = self.actor(state)
            action_std = torch.exp(self.log_std)
            dist = torch.distributions.Normal(action_mean, action_std)
            action = dist.sample()
            return action, dist.log_prob(action)
```

### Training Loop

```python
def train_ppo(env, agent, num_episodes=1000):
    for episode in range(num_episodes):
        states, actions, rewards, log_probs, values = collect_trajectory(env, agent)

        # Compute advantages
        advantages = compute_gae(rewards, values, gamma=0.99, lam=0.95)

        # Update policy and value function
        agent.update(states, actions, advantages, log_probs)

        if episode % 100 == 0:
            print(f"Episode {episode}: Average Reward = {np.mean(rewards)}")
```

## Domain Randomization

### Environment Variation

#### **Visual Randomization**
```python
# Randomize lighting and textures
def randomize_environment():
    # Lighting variation
    light_intensity = np.random.uniform(0.5, 2.0)
    light_color = np.random.uniform([0.5, 0.5, 0.5], [1.5, 1.5, 1.5])

    # Object properties
    object_colors = np.random.uniform([0.2, 0.2, 0.2], [1.0, 1.0, 1.0])
    object_sizes = np.random.uniform([0.8, 0.8, 0.8], [1.2, 1.2, 1.2])

    # Camera parameters
    camera_positions = np.random.uniform([-0.5, -0.5, 0.5], [0.5, 0.5, 1.5])
```

#### **Physical Randomization**
```python
# Randomize physical properties
def randomize_physics():
    # Mass variation
    object_mass = np.random.uniform(0.5, 2.0)

    # Friction coefficients
    friction_static = np.random.uniform(0.3, 1.0)
    friction_dynamic = np.random.uniform(0.2, 0.8)

    # Damping coefficients
    joint_damping = np.random.uniform(0.1, 1.0)
```

## Sim-to-Real Transfer

### Reality Gap Mitigation

#### **Progressive Domain Adaptation**
1. **Simulation training**: Train in Isaac Sim with randomization
2. **Real-world fine-tuning**: Adapt to specific hardware
3. **Online adaptation**: Continuous learning during deployment

#### **System Identification**
```python
# Learn real-world dynamics
class SystemID:
    def __init__(self):
        self.dynamics_model = NeuralNetworkDynamics()

    def learn_dynamics(self, state_action_pairs, next_states):
        # Learn mapping: (state, action) -> next_state
        self.dynamics_model.fit(state_action_pairs, next_states)

    def predict_next_state(self, state, action):
        return self.dynamics_model.predict((state, action))
```

## Deployment on Hardware

### Policy Deployment

#### **TensorRT Optimization**
```python
import tensorrt as trt

def optimize_policy_for_deployment(policy_model):
    # Convert to TensorRT engine
    with trt.Builder() as builder:
        network = builder.create_network()
        # ... convert PyTorch model to TensorRT ...

        engine = builder.build_cuda_engine(network)

    return engine
```

### Real-time Control

#### **Control Loop Implementation**
```python
class RealTimeController:
    def __init__(self, policy, control_freq=1000):  # 1000 Hz
        self.policy = policy
        self.control_period = 1.0 / control_freq
        self.last_control_time = time.time()

    def control_loop(self):
        while True:
            current_time = time.time()
            if current_time - self.last_control_time >= self.control_period:
                # Get current state
                state = self.get_robot_state()

                # Compute action
                action = self.policy.select_action(state)

                # Apply action
                self.apply_action(action)

                self.last_control_time = current_time
```

## Applications

### Robotic Manipulation
- **Pick and place**: Industrial automation
- **Assembly tasks**: Precision manufacturing
- **Object manipulation**: Service robotics

### Locomotion Control
- **Bipedal walking**: Humanoid robot locomotion
- **Quadruped control**: Dynamic movement
- **Wheeled navigation**: Autonomous vehicles

## Best Practices

### Training Stability
- **Proper reward scaling**: Normalize rewards to prevent instability
- **Gradient clipping**: Prevent exploding gradients
- **Experience replay**: Break temporal correlations

### Sample Efficiency
- **Off-policy learning**: Learn from past experiences
- **Hindsight experience replay**: Learn from failed attempts
- **Curriculum learning**: Start simple, increase complexity

### Safety and Robustness
- **Safety constraints**: Include safety in reward function
- **Robust policies**: Train with diverse scenarios
- **Fallback behaviors**: Default safe actions

## Learning Objectives

By the end of this lesson, you will be able to:

- **Implement** reinforcement learning environments in Isaac Sim
- **Design** reward functions for robotic control tasks
- **Apply** domain randomization for robust policy learning
- **Deploy** trained policies on physical robots
- **Optimize** RL training for sample efficiency and stability

## Key Takeaways

- Reinforcement learning enables complex robotic behaviors through trial and error
- Isaac Sim provides powerful tools for RL training with photorealistic simulation
- Domain randomization is crucial for sim-to-real transfer
- Careful reward design and training stability are essential for success
- Real-time deployment requires optimization and robust control architectures

## Further Reading

- Schulman, J., et al. (2017). Proximal Policy Optimization Algorithms
- OpenAI Spinning Up: https://spinningup.openai.com/
- Isaac RL Documentation: https://docs.nvidia.com/isaac/isaac/packages/navigation/doc/index.html