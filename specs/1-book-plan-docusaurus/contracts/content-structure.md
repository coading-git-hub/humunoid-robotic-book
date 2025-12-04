# Content Contracts: Docusaurus Book Plan

This document outlines the contracts for the Docusaurus book content, focusing on the expected structure, Markdown conventions, and sidebar navigation.

## 1. Docusaurus Directory Structure

The Docusaurus project will adhere to the following directory structure:

```text
├── docs/                  # Primary documentation content
│   ├── index.md           # Main landing page for docs
│   ├── intro/             # Introduction module (Weeks 1-2)
│   │   ├── _category_.json
│   │   ├── index.md       # Introduction module overview
│   │   └── lesson-1-foundations.md
│   │   └── lesson-2-humanoid-landscape.md
│   ├── ros2-fundamentals/ # ROS 2 Module (Weeks 3-5)
│   │   ├── _category_.json
│   │   ├── index.md       # ROS 2 module overview
│   │   ├── lesson-1-architecture.md
│   │   ├── lesson-2-python-packages.md
│   │   └── lesson-3-launch-parameters.md
│   ├── digital-twin/      # Digital Twin Module (Weeks 6-7)
│   │   ├── _category_.json
│   │   ├── index.md
│   │   ├── lesson-1-gazebo-setup.md
│   │   └── lesson-2-urdf-sdf.md
│   ├── nvidia-isaac/      # NVIDIA Isaac Module (Weeks 8-10)
│   │   ├── _category_.json
│   │   ├── index.md
│   │   ├── lesson-1-sdk-isaac-sim.md
│   │   ├── lesson-2-perception-manipulation.md
│   │   └── lesson-3-reinforcement-learning.md
│   ├── vla-humanoids/     # VLA & Humanoids Module (Weeks 11-13)
│   │   ├── _category_.json
│   │   ├── index.md
│   │   ├── lesson-1-kinematics-dynamics.md
│   │   ├── lesson-2-locomotion-balance.md
│   │   ├── lesson-3-manipulation-grasping.md
│   │   └── lesson-4-hri-design.md
│   ├── conversational-robotics/ # Week 13
│   │   ├── _category_.json
│   │   ├── index.md
│   │   └── lesson-1-gpt-integration.md
│   ├── assessments/       # Assessments (e.g., project descriptions)
│   │   ├── _category_.json
│   │   ├── ros2-package-project.md
│   │   ├── gazebo-simulation-project.md
│   │   ├── isaac-perception-pipeline.md
│   │   └── capstone-project.md
│   ├── hardware-setup/    # Hardware and lab setup guides
│   │   ├── _category_.json
│   │   ├── digital-twin-workstation.md
│   │   ├── physical-ai-edge-kit.md
│   │   └── cloud-native-setup.md
│   └── references/        # Quick guides, troubleshooting, glossary
│       ├── _category_.json
│       ├── ros2-commands.md
│       ├── troubleshooting.md
│       └── glossary.md
├── static/images/         # Static assets (diagrams, figures, screenshots)
│   ├── intro-diagrams/
│   ├── ros2-diagrams/
│   ├── digital-twin-diagrams/
│   ├── nvidia-isaac-diagrams/
│   ├── vla-humanoids-diagrams/
│   ├── conversational-robotics-diagrams/
│   ├── assessments-diagrams/
│   └── hardware-diagrams/
├── src/                   # Custom React components or pages (if any)
├── sidebars.js            # Docusaurus sidebar configuration
├── docusaurus.config.js   # Main Docusaurus configuration
├── package.json           # Node.js project dependencies
└── README.md
```

## 2. Markdown Formatting Conventions

All Markdown content will adhere to Docusaurus-compatible Markdown formatting:

*   **Headings**: Use H1 for module titles (within `index.md` of each module), H2 for lesson titles, and H3/H4 for subtopics within lessons.
*   **Code Blocks**: All code samples, commands, or exercises (ROS 2, Python, Gazebo, Unity, URDF, Isaac Sim, VLMs) MUST be enclosed in fenced code blocks with appropriate language highlighting (e.g., ````python`, ````bash`, ````xml`).
*   **Images**: Images will be referenced using standard Markdown image syntax (`![alt text](/static/images/path/to/image.png)`) with alt text provided. All image assets MUST be placed under `/static/images/`.
*   **Lists**: Use standard Markdown for ordered and unordered lists.
*   **Tables**: Use standard Markdown for tables where appropriate (e.g., for hardware requirements summaries).
*   **Internal Links**: All internal navigation links MUST use Docusaurus-compatible relative paths.

## 3. Spec-Kit Plus Interactive Annotations

Each lesson MUST incorporate Spec-Kit Plus interactive annotations at relevant points. These will be implemented using custom MDX components (if Docusaurus configuration allows) or standard Markdown callout blocks (if MDX components are not implemented):

*   **Notes**: Highlight important information or background context.
*   **Warnings**: Alert students to potential issues, common pitfalls, or critical considerations.
*   **Tips**: Provide helpful advice or shortcuts.
*   **Important Takeaways**: Summarize key learning points at the end of sections or lessons.
*   **Code Explanations**: Provide inline explanations or elaborations for complex code snippets.

## 4. Filename Conventions

Consistent filename conventions will be used for all generated files:

*   **Module Folders**: `lowercase-kebab-case` (e.g., `ros2-fundamentals`, `digital-twin`).
*   **Lesson Markdown Files**: `lesson-n-lowercase-kebab-case.md` (e.g., `lesson-1-architecture.md`, `lesson-2-urdf-sdf.md`). `index.md` will be used for module overviews.
*   **Category Files**: `_category_.json` for defining sidebar labels and positions within module folders.
*   **Image Assets**: `lowercase-kebab-case-description.png` (or `.jpg`, `.svg`) (e.g., `ros2-nodes-diagram.png`, `humanoid-kinematics-figure.jpg`). Images should be organized into subdirectories within `static/images` corresponding to modules (e.g., `static/images/ros2-diagrams/`).

## 5. Sidebar Structure (`sidebars.js`)

The `sidebars.js` file will define the navigation hierarchy based on the module → lesson structure. The structure will generally follow:

```javascript
module.exports = {
  tutorialSidebar: [
    {
      type: 'autogenerated',
      dirName: '.', // Generates sidebar from the docs folder itself
    },
  ],
};
```

Or, for more explicit control, a structure like this will be used for individual modules:

```javascript
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      link: { type: 'doc', id: 'intro/index' },
      items: [
        'intro/lesson-1-foundations',
        'intro/lesson-2-humanoid-landscape',
      ],
    },
    {
      type: 'category',
      label: 'ROS 2 Fundamentals',
      link: { type: 'doc', id: 'ros2-fundamentals/index' },
      items: [
        'ros2-fundamentals/lesson-1-architecture',
        'ros2-fundamentals/lesson-2-python-packages',
        'ros2-fundamentals/lesson-3-launch-parameters',
      ],
    },
    // ... other modules
    {
      type: 'category',
      label: 'Assessments',
      link: { type: 'doc', id: 'assessments/index' },
      items: [
        'assessments/ros2-package-project',
        'assessments/gazebo-simulation-project',
        'assessments/isaac-perception-pipeline',
        'assessments/capstone-project',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Setup',
      link: { type: 'doc', id: 'hardware-setup/index' },
      items: [
        'hardware-setup/digital-twin-workstation',
        'hardware-setup/physical-ai-edge-kit',
        'hardware-setup/cloud-native-setup',
      ],
    },
    {
      type: 'category',
      label: 'References',
      link: { type: 'doc', id: 'references/index' },
      items: [
        'references/ros2-commands',
        'references/troubleshooting',
        'references/glossary',
      ],
    },
  ],
};
```

The `_category_.json` files will specify the label and position of each category in the sidebar, providing fine-grained control over the generated navigation. For example, for the `intro` module (`docs/intro/_category_.json`):

```json
{
  "label": "Introduction",
  "position": 1,
  "link": {
    "type": "generated-index",
    "title": "Introduction Overview"
  }
}
```
