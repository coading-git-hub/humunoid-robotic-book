# Gazebo Simulation Environment Setup

## Overview

This lesson covers setting up Gazebo for robot simulation, focusing on environment setup and ROS 2 integration.

## Installation

Install Gazebo on Ubuntu:

```bash
sudo apt update
sudo apt install ros-humble-gazebo-ros-pkgs
```

This installs Gazebo with ROS 2 integration packages.

## World Configuration

Create a basic world file:

```xml
<?xml version="1.0"?>
<sdf version="1.6">
  <world name="default">
    <physics name="default_physics" default="true" type="ode">
      <gravity>0 0 -9.8</gravity>
    </physics>
    <light name="sun" type="directional">
      <cast_shadows>true</cast_shadows>
      <pose>0 0 10 0 0 0</pose>
      <diffuse>0.8 0.8 0.8 1</diffuse>
      <specular>0.2 0.2 0.2 1</specular>
      <direction>-0.5 0.5 -1</direction>
    </light>
    <model name="ground_plane">
      <static>true</static>
      <link name="link">
        <collision name="collision">
          <geometry>
            <plane>
              <normal>0 0 1</normal>
            </plane>
          </geometry>
        </collision>
        <visual name="visual">
          <geometry>
            <plane>
              <normal>0 0 1</normal>
            </plane>
          </geometry>
        </visual>
      </link>
    </model>
  </world>
</sdf>
```

## ROS 2 Integration

Launch Gazebo with ROS 2:

```bash
ros2 launch gazebo_ros gazebo.launch.py
```

Spawn robots using URDF files:

```bash
ros2 run gazebo_ros spawn_entity.py -file robot.urdf -entity robot
```

## Physics Simulation

Configure physics engines and properties:

- **ODE**: Default physics engine
- **Bullet**: Alternative for complex simulations
- Set appropriate gravity and time steps
- Configure collision detection

## Sensor Simulation

Add sensors to your robot models:

```xml
<sensor name="camera" type="camera">
  <camera>
    <horizontal_fov>1.047</horizontal_fov>
    <image>
      <width>640</width>
      <height>480</height>
    </image>
  </camera>
  <plugin name="camera_plugin" filename="libgazebo_ros_camera.so">
    <ros>
      <namespace>/camera</namespace>
    </ros>
  </plugin>
</sensor>
```

## Best Practices

- Use Ubuntu for compatibility
- Test simulations with simple models first
- Monitor performance and adjust physics settings
- Use ROS 2 plugins for sensor data publishing

## Learning Objectives

- Install Gazebo with ROS 2 integration
- Create and configure simulation worlds
- Spawn robots and sensors in Gazebo
- Understand physics simulation parameters