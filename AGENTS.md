# Project Overview

## Purpose

This repository contains the official Neon AI Development Toolkit, a comprehensive suite of AI-powered development tools for working with Neon Postgres databases. The project serves three primary purposes:

1. **Primary**: Comprehensive Claude Code plugin with AI context rules for Neon Postgres database development
2. **Secondary**: Portable, tool-agnostic context rules (.mdc files) for multiple AI assistants
3. **Tertiary**: Guided workflows through Claude Code skills with templates, scripts, and automation

## Target Audience

- **Primary**: AI developers using Claude Code with Neon databases
- **Secondary**: Cursor users integrating Neon into their projects
- **Tertiary**: Developers using custom ChatGPT or other AI tools with Neon

## Architecture

### Context Rules
15 self-contained .mdc files covering integrations, SDKs, and API patterns:

- **Core Integration** (4 files): neon-auth, neon-serverless, neon-drizzle, neon-toolkit
- **SDK Rules** (2 files): neon-typescript-sdk, neon-python-sdk
- **API Rules** (7 files): neon-api-guidelines, projects, branches, endpoints, organizations, keys, operations
- **Getting Started** (2 files): neon-get-started, neon-get-started-kiro

### Claude Code Plugin
Full-featured plugin with 4 guided skills and MCP server integration:

#### Skills
1. **neon-drizzle**: Drizzle ORM setup with comprehensive workflow guides (new/existing projects, schema-only)
2. **neon-serverless**: Serverless database connection configuration (HTTP/WebSocket adapters)
3. **neon-toolkit**: Ephemeral database creation for testing and CI/CD
4. **add-neon-docs**: Documentation reference installer for AI config files

#### MCP Integration
- **Server URL**: https://mcp.neon.tech/mcp
- **Capabilities**: Project/branch/endpoint management, SQL execution, migration management, query optimization

### Quality Assurance
Automated skill evaluation using code-agent-eval framework:

| Skill | Pass Rate | Tests | Date |
|-------|-----------|-------|------|
| neon-drizzle | 95.0% | 20 | 2025-10-29 |
| add-neon-docs | 91.7% | 60 | 2025-10-28 |

## Design Patterns

### Self-Contained Skills
Each skill includes SKILL.md, scripts, templates, guides, and references, allowing AI assistants to operate autonomously within skill context.

### Template-Driven
Production-ready code templates rather than minimal examples, enabling users to directly use templates in real projects.

### Multi-Scenario Guides
Separate guides for new projects, existing projects, schema-only workflows, and troubleshooting to handle diverse user contexts and requirements.

### Remote MCP
Plugin uses remote MCP server URL for centralized capability updates, allowing server feature updates without plugin releases.

## Business Domain

**Domain**: Database development tooling and AI-assisted coding

**Use Cases**:
- Setting up Drizzle ORM with type-safe schemas and migrations
- Configuring serverless database connections for Next.js, Vercel, AWS Lambda
- Creating ephemeral databases for testing and CI/CD pipelines
- Installing Neon best practices into project AI configuration
- Managing Neon resources (projects, branches, databases) via MCP

## Release Information

- **Version**: 1.0.1
- **Release Date**: October 2025
- **Status**: Public release with marketplace listing
- **License**: MIT

---

# Technology Stack

## Languages

- **Markdown**: Documentation and context rules (.mdc files)
- **TypeScript** (latest): Skill scripts and automation
- **Shell**: Setup and utility scripts

## Frameworks

- **Claude Code**: AI-powered development environment
- **MCP** (latest): Model Context Protocol for resource management

## Runtime

- **Node.js**: Script execution

## Development Tools

- **Claude Code**: Primary AI assistant platform
- **Cursor**: Alternative AI code editor
- **code-agent-eval** (v0.0.1-alpha.4): Skill evaluation and testing

## Databases

- **Neon Postgres**: Target database platform

## Integrations

- **Neon MCP Server** (https://mcp.neon.tech/mcp): Direct Neon resource management
- **Stack Auth**: Authentication patterns (via neon-auth skill)
- **Drizzle ORM**: Type-safe database queries

---

# Coding Standards

## Documentation Rules

### MDC File Independence (HIGH PRIORITY)
**Rule**: Each .mdc file must be self-contained and not reference other .mdc files
**Rationale**: Ensures portability across different AI tools and environments

### MDC Structure (HIGH PRIORITY)
**Rule**: All .mdc files follow consistent structure: Overview → Use Cases → Examples → Best Practices
**Rationale**: Provides predictable learning experience for AI assistants

### Tool Agnostic (MEDIUM PRIORITY)
**Rule**: MDC files must work with Claude Code, Cursor, and other AI tools without modification
**Rationale**: Maximizes reach and usability

## Skill Development Rules

### Skill Components (HIGH PRIORITY)
**Rule**: Each skill must contain: SKILL.md, scripts/, templates/, and optionally guides/ and references/
**Rationale**: Ensures consistent skill structure and discoverability

### Production Ready (HIGH PRIORITY)
**Rule**: All templates must be production-ready, not toy examples
**Rationale**: Users should be able to use templates directly in real projects

### Script Automation (MEDIUM PRIORITY)
**Rule**: Scripts provide automation and validation, using TypeScript with @types/node
**Rationale**: Reduces manual work and ensures correctness

### Step-by-Step Workflows (MEDIUM PRIORITY)
**Rule**: Guides provide detailed step-by-step instructions for different scenarios (new project, existing project, troubleshooting)
**Rationale**: Helps AI assistants navigate complex workflows

## Versioning Rules

### Semantic Versioning (HIGH PRIORITY)
**Rule**: Plugin version follows semantic versioning (MAJOR.MINOR.PATCH)
**Rationale**: Provides clear communication about breaking changes

### Version Sync (HIGH PRIORITY)
**Rule**: Update plugin.json version when adding new skills or making breaking changes
**Rationale**: Keeps marketplace listing accurate

## Quality Assurance Rules

### Evaluation Testing (HIGH PRIORITY)
**Rule**: Skills must be tested with code-agent-eval framework before release
**Rationale**: Ensures reliability and quality (target: 90%+ pass rate)

### Documentation Sync (HIGH PRIORITY)
**Rule**: Update README.md and CLAUDE.md when adding new rules or skills
**Rationale**: Keeps documentation current with codebase

## MCP Configuration

### Remote MCP Server (MEDIUM PRIORITY)
**Rule**: Use remote MCP server URL (https://mcp.neon.tech/mcp) for centralized updates
**Rationale**: Allows updating server capabilities without plugin releases

---

# Project Structure

```
.
|-- bun.lock
|-- CHANGELOG.md
|-- CLAUDE.md
|-- CONTRIBUTING.md
|-- drizzle-test-project/         # Test project for validation
|   |-- drizzle.config.ts
|   |-- package.json
|   |-- src/
|   |   |-- db/
|   |   `-- test-connection.ts
|   `-- tsconfig.json
|-- LICENSE
|-- neon-api-branches.mdc         # API context rules
|-- neon-api-endpoints.mdc
|-- neon-api-guidelines.mdc
|-- neon-api-keys.mdc
|-- neon-api-operations.mdc
|-- neon-api-organizations.mdc
|-- neon-api-projects.mdc
|-- neon-auth.mdc                 # Core integration rules
|-- neon-drizzle.mdc
|-- neon-get-started-kiro.mdc     # Partner-specific guide
|-- neon-get-started.mdc          # Getting started guide
|-- neon-plugin/                  # Claude Code Plugin
|   |-- .claude-plugin/
|   |   `-- plugin.json
|   |-- .mcp.json                 # MCP server configuration
|   |-- evals/                    # Evaluation test results
|   |   |-- add-neon-knowledge-skill/
|   |   `-- neon-drizzle-skill/
|   |-- README.md
|   `-- skills/                   # Guided skills
|       |-- add-neon-docs/        # Docs installer skill
|       |-- neon-drizzle/         # Drizzle ORM skill
|       |   |-- SKILL.md
|       |   |-- guides/
|       |   |-- references/
|       |   |-- scripts/
|       |   `-- templates/
|       |-- neon-serverless/      # Serverless skill
|       `-- neon-toolkit/         # Ephemeral DB skill
|-- neon-python-sdk.mdc           # SDK context rules
|-- neon-serverless.mdc
|-- neon-toolkit.mdc
|-- neon-typescript-sdk.mdc
|-- package.json
|-- .claude-plugin/               # Marketplace metadata
|   `-- marketplace.json
`-- README.md

Key directories:
- Root: .mdc context rule files (15 total)
- neon-plugin/: Complete Claude Code plugin
- neon-plugin/skills/: 4 guided skills with templates, scripts, guides
- neon-plugin/evals/: Automated test results
- drizzle-test-project/: Validation test project
```

## Directory Descriptions

### Root Level
Contains all portable .mdc context rule files that work with any AI assistant. These files are organized by category (core integration, SDK, API, getting started).

### neon-plugin/
The complete Claude Code plugin with metadata, MCP configuration, skills, and evaluation results.

### neon-plugin/skills/
Four self-contained guided skills, each with:
- SKILL.md: Skill description and workflow
- scripts/: TypeScript automation utilities
- templates/: Production-ready code examples
- guides/ (optional): Multi-scenario workflow guides
- references/ (optional): Technical reference documentation

### neon-plugin/evals/
Automated evaluation test results demonstrating skill reliability and quality (90%+ pass rates).

### drizzle-test-project/
Validation test project used to verify Drizzle ORM skill functionality.

---

# External Resources

## Documentation

### Claude Code Skills
**URL**: https://docs.claude.com/en/docs/claude-code/skills
**Category**: Framework
**Description**: Official documentation for building Claude Code skills

### Claude Code Plugins
**URL**: https://docs.claude.com/en/docs/claude-code/plugins
**Category**: Framework
**Description**: Plugin development and distribution guidelines

### Claude Code Subagents
**URL**: https://docs.claude.com/en/docs/claude-code/sub-agents
**Category**: Framework
**Description**: Understanding subagent architecture and capabilities

### Skills Examples
**URL**: https://github.com/anthropics/skills
**Category**: Examples
**Description**: Official skill examples from Anthropic

### Skills Best Practices
**URL**: https://docs.claude.com/en/docs/agents-and-tools/agent-skills/best-practices
**Category**: Best Practices
**Description**: Best practices for building effective skills

### Plugin Marketplace
**URL**: https://docs.claude.com/en/docs/claude-code/plugin-marketplaces
**Category**: Distribution
**Description**: How to publish plugins to marketplaces

## APIs

### Neon API
**URL**: https://neon.tech/api
**Category**: API
**Description**: Neon API for programmatic database management

### Neon MCP Server
**URL**: https://mcp.neon.tech/mcp
**Category**: Service
**Description**: Remote MCP server for Neon resource management

## Libraries

### Drizzle ORM
**URL**: https://orm.drizzle.team
**Category**: ORM
**Description**: TypeScript ORM for type-safe database queries

### @neondatabase/serverless
**URL**: https://github.com/neondatabase/serverless
**Category**: Driver
**Description**: Low-latency Postgres driver for JavaScript and TypeScript

### Stack Auth
**URL**: https://stack-auth.com
**Category**: Authentication
**Description**: Authentication provider integrated with Neon Auth

### code-agent-eval
**URL**: https://www.npmjs.com/package/code-agent-eval
**Category**: Testing
**Description**: Evaluation framework for testing AI agent skills

## Platforms

### GitHub Repository
**URL**: https://github.com/neondatabase-labs/ai-rules
**Category**: Source
**Description**: Source code and issue tracking

### Neon Documentation
**URL**: https://neon.tech/docs/ai/ai-rules
**Category**: Documentation
**Description**: Official Neon documentation for AI rules

### Neon Discord
**URL**: https://discord.com/channels/1176467419317940276/@home
**Category**: Support
**Description**: Community support and discussions

---

# Additional Context

## Key Differentiators

This is the official Neon AI Development Toolkit, providing comprehensive tools for building with Neon Postgres databases using AI-powered development environments. The project serves dual purposes:

1. **Complete Claude Code Plugin**: Includes guided skills with templates, scripts, and MCP integration for direct resource management
2. **Portable Context Rules**: Tool-agnostic .mdc files that work with any AI assistant (Cursor, ChatGPT, etc.)

## Quality & Testing

The plugin has been rigorously tested with automated evaluations achieving 90%+ pass rates:
- neon-drizzle skill: 95.0% pass rate (19/20 tests)
- add-neon-docs skill: 91.7% pass rate (55/60 tests)

## Architecture Highlights

### Self-Contained Design
Each skill is completely autonomous with all necessary components (documentation, scripts, templates, guides) included. This allows AI assistants to operate independently within the skill context.

### Production-Ready Templates
Unlike many example-based tools, all templates are production-ready and can be used directly in real projects without modification.

### Multi-Scenario Support
The toolkit handles diverse user contexts through separate workflow guides:
- New project setup from scratch
- Integration into existing codebases
- Schema-only development workflows
- Troubleshooting common issues

### Remote MCP Architecture
The plugin uses a remote MCP server URL for centralized capability updates. This architectural decision allows the Neon team to update server features and add new capabilities without requiring users to update the plugin.

## Usage Workflows

### For Claude Code Users
1. Add the Neon marketplace: `/plugin marketplace add neondatabase-labs/ai-rules`
2. Install the plugin: `/plugin install neon-plugin@neon`
3. Use natural language to activate skills automatically

### For Cursor Users
1. Create rules directory: `mkdir -p .cursor/rules`
2. Copy desired .mdc files to the rules directory
3. Cursor automatically applies these rules when working with Neon

### For Other AI Tools
Copy individual .mdc files to your AI tool's custom rules directory. Each file is self-contained and works independently.

---

# Testing Instructions

## Skill Evaluation

Skills are tested using the `code-agent-eval` framework (v0.0.1-alpha.4). The evaluation process:

1. **Setup**: Load the plugin in a real Claude Code environment
2. **Execution**: Run multiple test prompts (10+ iterations per prompt)
3. **Validation**: Scorers validate:
   - Build success
   - Skill activation
   - Output correctness
   - Template functionality

## Test Results Location

Evaluation results are stored in:
- `neon-plugin/evals/neon-drizzle-skill/eval-results/`
- `neon-plugin/evals/add-neon-knowledge-skill/eval-results/`

Each evaluation directory contains:
- `results.md`: Detailed test results with pass/fail analysis
- Individual test case outputs
- Scorer validation reports

## Running Evaluations

To run skill evaluations:

```bash
# Install evaluation framework
npm install code-agent-eval

# Run evaluation for a specific skill
# (Requires Claude Code environment and plugin loaded)
npx code-agent-eval [skill-name]
```

## Quality Standards

- **Target Pass Rate**: 90% or higher
- **Test Coverage**: Minimum 20 test iterations per skill
- **Validation Criteria**: Build success + skill activation + correct output

---

# Build Steps

This project is primarily documentation and configuration-based. There is no traditional "build" process, but here are the key setup and validation steps:

## For Plugin Development

### 1. Install Dependencies

```bash
npm install
```

This installs:
- `@types/node`: TypeScript definitions for Node.js
- `code-agent-eval`: Evaluation framework for testing

### 2. Validate Plugin Structure

Ensure the plugin follows the required structure:

```
neon-plugin/
├── .claude-plugin/
│   └── plugin.json          # Must exist with valid metadata
├── .mcp.json                # Must exist with MCP server URL
└── skills/                  # At least one skill directory
    └── [skill-name]/
        ├── SKILL.md         # Required
        ├── scripts/         # Recommended
        └── templates/       # Recommended
```

### 3. Validate Marketplace Configuration

Check `.claude-plugin/marketplace.json` at repository root:
- Verify `name`, `owner`, and `metadata` fields
- Ensure `plugins` array references `./neon-plugin`
- Validate version matches `plugin.json`

### 4. Test .mdc Files

Verify all .mdc files follow the standard structure:
1. Overview section
2. Use Cases section
3. Examples section
4. Best Practices section

### 5. Validate MCP Configuration

Check `neon-plugin/.mcp.json`:
- Ensure URL points to https://mcp.neon.tech/mcp
- Verify connection is accessible

## For Testing Changes

### Test Drizzle Project

The `drizzle-test-project/` directory contains a validation project:

```bash
cd drizzle-test-project
npm install
npm run db:generate  # Generate schema
npm run db:migrate   # Run migrations
npm run test         # Test connection
```

## For Distribution

### Publishing to Marketplace

1. Update version in both:
   - `.claude-plugin/marketplace.json`
   - `neon-plugin/.claude-plugin/plugin.json`

2. Update CHANGELOG.md with release notes

3. Commit changes:
   ```bash
   git add .
   git commit -m "Release v[VERSION]"
   git tag v[VERSION]
   git push origin main --tags
   ```

4. Users can then install via:
   ```bash
   /plugin marketplace add neondatabase-labs/ai-rules
   /plugin install neon-plugin@neon
   ```

---

# Contributing

Please see CONTRIBUTING.md for guidelines on:
- Adding new .mdc context rules
- Creating new skills
- Testing and evaluation
- Documentation updates
- Pull request process

For issues and support:
- **GitHub Issues**: https://github.com/neondatabase-labs/ai-rules/issues
- **Neon Discord**: https://discord.com/channels/1176467419317940276/@home
