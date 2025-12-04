# Launch Files and Parameter Management

## Overview

This lesson covers ROS 2 launch files for orchestrating multiple nodes and parameter management for configuration.

## Launch Files

Launch files allow you to start multiple nodes and configure them simultaneously. ROS 2 supports Python-based launch files.

### Python Launch File Example

```python
import launch
import launch_ros.actions

def generate_launch_description():
    return launch.LaunchDescription([
        launch_ros.actions.Node(
            package='my_robot_pkg',
            executable='publisher_node',
            name='publisher',
            parameters=[{'topic_name': 'chatter'}]
        ),
        launch_ros.actions.Node(
            package='my_robot_pkg',
            executable='subscriber_node',
            name='subscriber'
        ),
    ])
```

## Parameter Management

Parameters allow runtime configuration of nodes:

### Declaring Parameters

```python
class ConfigurableNode(Node):
    def __init__(self):
        super().__init__('configurable_node')
        self.declare_parameter('frequency', 1.0)
        self.declare_parameter('topic_name', 'default_topic')

        self.frequency = self.get_parameter('frequency').value
        self.topic_name = self.get_parameter('topic_name').value
```

### Setting Parameters at Runtime

```bash
ros2 param set /configurable_node frequency 2.0
ros2 param get /configurable_node frequency
```

### Using Parameter Files

Launch files can load parameters from YAML files:

```python
launch_ros.actions.Node(
    package='my_robot_pkg',
    executable='node',
    parameters=[{
        'frequency': 1.0,
        'topic_name': 'chatter'
    }]
)
```

## Best Practices

- Use launch files to orchestrate complex systems
- Declare parameters with default values
- Use parameter files for complex configurations
- Validate parameter values in nodes

## Learning Objectives

- Create Python launch files for multi-node systems
- Implement parameter declaration and usage in nodes
- Configure nodes through launch files and parameter files
- Apply best practices for ROS 2 configuration management