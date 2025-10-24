# 🧩 System Architecture – Self Service UI Assistant

## 1. Overview
**Self Service UI Assistant** is an experimental, cloud-native developer tool designed to simplify infrastructure operations.  
Instead of being a full enterprise portal, it acts as a lightweight layer on top of Kubernetes and Crossplane —  
allowing developers to perform common infrastructure tasks (like creating environments, checking resource status, or requesting compute)  
directly through a modern, intuitive web interface.

The assistant bridges the gap between developers and operations by translating manual YAML and CLI actions into guided, automated workflows.  
It is meant for small teams or personal use, demonstrating how infrastructure self-service can be intuitive and accessible.

---

## 2. Vision
To build a **developer assistant** that simplifies DevOps workflows,  
reduces dependency on manual intervention, and provides clear visibility into system state.  
Rather than replacing existing platforms, the project focuses on **augmenting** them —  
showing how better user experience and lightweight automation can coexist with existing DevOps ecosystems.

> “Developers should be able to deploy and manage infrastructure safely — without leaving their flow.”

---

## 3. Core Objectives
1. **Developer Experience** – simplify complex DevOps workflows into intuitive UI actions.  
2. **Automation** – leverage Crossplane and Kubernetes to execute infrastructure changes automatically.  
3. **Transparency & Feedback** – display real-time deployment status and system feedback in a human-friendly way.  
4. **Extendability** – allow future integration with GitOps, Helm, or real cloud providers.

---

## 4. Technology Stack
| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend (UI)** | Next.js + TypeScript + TailwindCSS | Interactive web interface |
| **Backend (API)** | Python + FastAPI + PyYAML + Kubernetes SDK | Middleware that triggers Crossplane and manages YAMLs |
| **Infrastructure Layer** | Crossplane + kind (Kubernetes in Docker) | Provisioning, orchestration, and environment simulation |
| **Runtime** | Docker / Docker Desktop (WSL2) | Local containerized environment |
| **Version Control** | Git + GitHub | Source code management and collaboration |

---

## 5. System Flow
```
[Next.js UI] → [Python API] → [Crossplane] → [Kubernetes (kind)]
```
1. The user triggers an action through the **Next.js** frontend.  
2. The **FastAPI** backend interprets it, generates YAML, and applies it to **Kubernetes**.  
3. **Crossplane** provisions or modifies the corresponding resource.  
4. The UI displays feedback and status updates in real-time.

---

## 6. Long-Term Vision
This project explores how a simple interface can improve **developer autonomy** and **DevOps collaboration**.  
Future explorations include:
- Integrations with AWS, GCP, or Azure through Crossplane providers.  
- Visual dashboards for environment health and cost.  
- Built-in GitOps support (ArgoCD, Flux).  
- Access control via Kubernetes RBAC.  

> 🧠 *Self Service UI Assistant aims to make infrastructure self-service simple, visual, and accessible —  
> without reinventing or replacing existing DevOps systems.*
