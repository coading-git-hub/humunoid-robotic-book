# ROS 2 Architecture and Core Concepts

## Overview

This lesson covers the fundamental architecture and core concepts of ROS 2, focusing on modular design and clear naming conventions.

## ROS 2 Architecture

ROS 2 is built on a modular architecture that separates concerns into distinct components:

- **Nodes**: Independent processes that perform computation
- **Topics**: Named buses for data streaming between nodes
- **Services**: Synchronous request-response communication
- **Actions**: Asynchronous long-running tasks with feedback
- **Parameters**: Configuration values for nodes

## Core Concepts

### Nodes

Nodes are the basic computational units in ROS 2. Each node should perform a single task and communicate with other nodes via topics, services, or actions.

```python
import rclpy
from rclpy.node import Node

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World'
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
```

### Topics (Publisher-Subscriber Pattern)

Topics enable asynchronous communication between nodes. Publishers send messages to topics, and subscribers receive them.

**Best Practices:**
- Use appropriate standard message types from `std_msgs`, `sensor_msgs`, etc.
- Specify `queue_size` for publishers
- Implement clear callback functions for subscribers

### Services (Client-Server Pattern)

Services provide synchronous communication for request-response interactions.

**Best Practices:**
- Define service interfaces using `.srv` files
- Use `call_async()` for asynchronous requests
- Implement `wait_for_service()` for availability checks

### DDS Middleware

ROS 2 uses DDS (Data Distribution Service) as its communication middleware, providing:
- Discovery of nodes and topics
- Reliable data delivery
- Quality of Service (QoS) policies

## Learning Objectives

- Understand ROS 2's modular architecture
- Implement basic nodes with publishers and subscribers
- Explain the role of DDS in ROS 2 communication
- Apply best practices for ROS 2 development