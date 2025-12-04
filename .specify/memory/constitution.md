<!-- Sync Impact Report (Generated 2025-12-04) -->
<!--
Version change: None → 1.0.0
Modified principles:
  - Accuracy
  - Clarity
  - Interactivity
  - Reproducibility
  - Modern Documentation
Added sections:
  - Key Deliverables and Content Structure
  - Technical Constraints and Workflow
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ updated
  - .specify/templates/spec-template.md: ✅ updated
  - .specify/templates/tasks-template.md: ✅ updated
  - .specify/templates/commands/*.md: ✅ updated
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics Book Constitution

## Core Principles

### Accuracy
All course content MUST reflect original course materials without alteration or misrepresentation.

### Clarity
Content MUST be structured in a clear hierarchy: modules → lessons → subtopics → projects.

### Interactivity
Spec-Kit Plus MUST be used for notes, tips, and code highlighting to enhance interactivity.

### Reproducibility
Course materials MUST include detailed hardware setup guides, software instructions, and runnable examples to ensure reproducibility.

### Modern Documentation
The book layout, navigation, and styling MUST follow Docusaurus guidelines, referencing https://docusaurus.io/docs for implementation.

### Additional Principles
Future principles will be added as needed.

## Key Deliverables and Content Structure

### Key Deliverables
- Full markdown book ready for Docusaurus deployment.
- Sidebar navigation structure for all modules and lessons.
- Annotated code and hardware tables utilizing Spec-Kit Plus features.
- Comprehensive deployment instructions for GitHub Pages.
- Optional diagrams and images stored within the `/static/images` directory.

### Module Structure
The book will be organized into the following modules, reflecting the course curriculum:
- Module 1: The Robotic Nervous System (ROS 2)
- Module 2: The Digital Twin (Gazebo & Unity)
- Module 3: The AI-Robot Brain (NVIDIA Isaac)
- Module 4: Vision-Language-Action (VLA)
- Module 5: Capstone Project
- Module 6: Hardware & Lab Setup

## Technical Constraints and Workflow

### Content Structure Constraints
- Each module MUST include lessons, code snippets, notes, and practical projects.
- All output MUST adhere to a Docusaurus-compatible Markdown structure:
  - Markdown content files located in `/docs`.
  - Static images and diagrams located in `/static/images`.
  - Sidebar navigation configuration in `/sidebars.js`.

### Automated Workflow
- Claude is responsible for automatically generating planning, tasks, and implementation artifacts.
- Claude MUST automatically create modules as top-level Docusaurus categories, lessons as Markdown files, and subtopics within lessons.

## Governance
This constitution supersedes all other practices and documentation. Amendments require documentation, approval, and a clear migration plan. Adherence to these principles is mandatory for all development efforts.

**Version**: 1.0.0 | **Ratified**: 2025-12-04 | **Last Amended**: 2025-12-04
