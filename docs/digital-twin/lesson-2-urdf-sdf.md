# URDF and SDF Robot Description Formats

## Overview

This lesson covers URDF (Unified Robot Description Format) and SDF (Simulation Description Format) for describing robot models.

## URDF Basics

URDF is an XML format for describing robot kinematics and dynamics:

```xml
<?xml version="1.0"?>
<robot name="my_robot">
  <link name="base_link">
    <visual>
      <geometry>
        <box size="1 1 1"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <box size="1 1 1"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.0"/>
      <inertia ixx="0.1" ixy="0" ixz="0" iyy="0.1" iyz="0" izz="0.1"/>
    </inertial>
  </link>

  <joint name="joint1" type="revolute">
    <parent link="base_link"/>
    <child link="link1"/>
    <origin xyz="0 0 1" rpy="0 0 0"/>
    <axis xyz="0 0 1"/>
    <limit lower="-3.14" upper="3.14" effort="100" velocity="1.0"/>
  </joint>
</robot>
```

## SDF Extensions

SDF extends URDF with simulation-specific features:

- Multiple models in one world
- Physics engine configuration
- Lighting and sensors
- Plugins for advanced functionality

## Best Practices

- Use xacro for modular URDF files
- Include collision meshes separate from visual
- Define proper inertial properties
- Use consistent naming conventions

## Learning Objectives

- Create basic URDF robot descriptions
- Understand SDF extensions for simulation
- Apply best practices for robot modeling
- Integrate URDF with ROS 2 and Gazebo