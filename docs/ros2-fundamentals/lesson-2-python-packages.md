# Building ROS 2 Packages with Python

## Overview

This lesson covers creating and managing ROS 2 packages using Python, following best practices for readability and reproducibility.

## Package Structure

A typical ROS 2 Python package includes:

```
my_robot_pkg/
├── package.xml
├── setup.py
├── setup.cfg
├── my_robot_pkg/
│   ├── __init__.py
│   └── node_example.py
├── resource/
│   └── my_robot_pkg
└── test/
    └── test_copyright.py
```

## Creating a ROS 2 Python Package

Use the ROS 2 CLI to create a new package:

```bash
ros2 pkg create --build-type ament_python my_robot_pkg
```

This creates the basic structure with `setup.py`, `package.xml`, and directories.

## Implementing Python Nodes

Nodes inherit from `rclpy.node.Node` and encapsulate functionality:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class PublisherNode(Node):
    def __init__(self):
        super().__init__('publisher_node')
        self.publisher_ = self.create_publisher(String, 'chatter', 10)
        self.timer = self.create_timer(1.0, self.publish_message)

    def publish_message(self):
        msg = String()
        msg.data = f'Hello from {self.get_name()}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: {msg.data}')

def main(args=None):
    rclpy.init(args=args)
    node = PublisherNode()
    rclpy.spin(node)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Publishers and Subscribers

### Publishers

Create publishers with appropriate queue sizes:

```python
self.publisher_ = self.create_publisher(String, 'topic_name', 10)
```

### Subscribers

Implement callback functions for message handling:

```python
self.subscription = self.create_subscription(
    String,
    'topic_name',
    self.listener_callback,
    10)

def listener_callback(self, msg):
    self.get_logger().info(f'I heard: {msg.data}')
```

## Best Practices

- Use meaningful variable names and follow PEP 8
- Implement proper error handling with try-except blocks
- Use logging with `self.get_logger().info()`
- Document code with docstrings
- Separate concerns into different nodes

## Learning Objectives

- Create ROS 2 Python packages using the CLI
- Implement nodes with publishers and subscribers
- Follow Python and ROS 2 best practices
- Structure packages for maintainability