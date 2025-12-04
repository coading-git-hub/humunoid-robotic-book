# Data Model: Book Plan Docusaurus

## Entities

### Module
*   **Description**: A major thematic section of the course (e.g., ROS 2, Digital Twin).
*   **Attributes**:
    *   `name`: String (e.g., "ROS 2")
    *   `weeks_covered`: String (e.g., "Weeks 3-5")
    *   `lessons`: List of Lesson entities
*   **Relationships**: Contains Lesson entities.

### Lesson
*   **Description**: A specific topic or subtopic within a module.
*   **Attributes**:
    *   `name`: String (e.g., "ROS 2 Nodes, Topics, and Services")
    *   `content`: Markdown content including text, code examples, practical tasks.
    *   `annotations`: List of Annotation entities
    *   `image_assets`: List of Image Asset entities
*   **Relationships**: Belongs to a Module. Contains Annotation and Image Asset entities.

### Hardware Configuration
*   **Description**: A defined set of physical and/or virtual components required for course practicals.
*   **Attributes**:
    *   `name`: String (e.g., "Digital Twin Workstation", "Physical AI Edge Kit", "Cloud-Native Setup")
    *   `components`: Detailed list of hardware and software requirements (e.g., GPU, CPU, RAM, OS, sensors, robots).
*   **Relationships**: Referenced by Lessons/Modules for setup.

### Annotation
*   **Description**: Interactive guidance elements within lessons.
*   **Attributes**:
    *   `type`: String (e.g., "Note", "Warning", "Tip", "Important takeaway", "Code explanation")
    *   `content`: Markdown text of the annotation.
*   **Relationships**: Belongs to a Lesson.

### Image Asset
*   **Description**: A visual resource (diagram, figure, screenshot) to be displayed within lessons.
*   **Attributes**:
    *   `filename`: String (e.g., "ros2-nodes-diagram.png")
    *   `path`: String (e.g., "/static/images/module-1-diagrams/ros2-nodes-diagram.png")
    *   `description`: String (brief description for alt text/caption).
*   **Relationships**: Belongs to a Lesson.
