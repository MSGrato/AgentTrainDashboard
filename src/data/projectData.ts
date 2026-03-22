export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface GalleryItem {
  title: string;
  caption: string;
  assetPath?: string;
  placeholder?: string;
}

export interface StackGroup {
  category: string;
  tools: string[];
  note: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  highlights: string[];
}

export interface ArchitectureItem {
  title: string;
  description: string;
}

export interface CodeHighlight {
  title: string;
  language: string;
  note: string;
  code: string;
}

export interface RoadmapPhase {
  phase: string;
  items: string[];
}

export interface RiskItem {
  title: string;
  mitigation: string;
}

export interface ProjectPageData {
  slug: string;
  title: string;
  subtitle: string;
  ownerLine: string;
  executiveSummary: string;
  instructions: string[];
  links: ProjectLink[];
  badges: string[];
  methods: string[];
  metrics: ProjectMetric[];
  problemStatement: string;
  solutionSummary: string;
  audience: string;
  impactGoal: string;
  status: string;
  keywords: string[];
  members: TeamMember[];
  gallery: GalleryItem[];
  stack: StackGroup[];
  features: FeatureCard[];
  architecture: ArchitectureItem[];
  codeHighlights: CodeHighlight[];
  roadmap: RoadmapPhase[];
  risks: RiskItem[];
}

export const projectData: ProjectPageData = {
  slug: 'wanbrc-train',

  title: 'WaNBRC Train',
  subtitle: 'AI-powered training records management dashboard for real-time compliance at the Washington National Biomedical Research Center.',
  ownerLine: 'Miranda S Grato · Individual Project',

  executiveSummary:
    'The Washington National Biomedical Research Center operates under layered regulatory requirements — biannual IACUC inspections, random USDA audits, AALAC accreditation reviews, and UW institutional training mandates. Despite this pressure, training management was entirely manual: employees submitted completions to a coordinator who entered them by hand, meaning live compliance status was never available. WaNBRC Train replaces that bottleneck with a real-time, role-based web application. Employees track and submit their own trainings. Supervisors approve their team\'s completions in real time. Coordinators access a full administrative view and use Agent Train — an AI chat agent — to generate custom compliance reports on demand. The WaNBRC has expressed interest in adopting the tool for actual organizational use.',

  instructions: [
    'Log in with your institutional credentials — your role (Employee, Supervisor, or Coordinator) is detected automatically from your profile.',
    'Employees can view assigned trainings, mark completions, and submit records for supervisor approval from their personal dashboard.',
    'Supervisors can review and approve their team\'s training completions and monitor department-wide compliance status in real time.',
    'Coordinators have full administrative access — manage users and trainings, and use Agent Train to generate compliance reports on demand.',
    'Ask Agent Train anything about training status in plain language: "Show me incomplete trainings for the animal care team" or "Who hasn\'t completed onboarding?"',
  ],

  links: [
    { label: 'Live Tool', url: 'https://wanbrc-train.lovable.app/', primary: true },
    { label: 'GitHub Repo', url: 'https://github.com/MSGrato/training-dashboard' },
    { label: 'Technical Report', url: '/project-assets/report.pdf' },
  ],

  badges: ['React 18', 'TypeScript', 'Supabase', 'Claude API', 'Tailwind CSS', 'shadcn/ui', 'Lovable'],

  keywords: ['compliance', 'training-management', 'RBAC', 'AI-agent', 'biomedical-research'],

  methods: [
    'Iterative AI-Assisted Development',
    'Role-Based Access Control (RLS + RoleGuard)',
    'Agentic Report Generation',
    'Database Trigger Automation',
  ],

  metrics: [
    { label: 'Users', value: '250+', note: 'Synthetic dataset across 10 realistic job titles' },
    { label: 'Dashboard Views', value: '14', note: 'Role-scoped across Employee, Supervisor, and Coordinator' },
    { label: 'Database Tables', value: '10', note: 'Relational schema with RLS enforced on every table' },
    { label: 'Edge Functions', value: '5', note: 'report-chat, manage-users, update-password, and more' },
  ],

  problemStatement:
    'The WaNBRC must simultaneously meet training requirements from IACUC, USDA, AALAC, and the University of Washington. Despite this pressure, training management was entirely reactive and manual — employees submitted completions to a coordinator who entered them by hand. There was no live view of who was trained and who was not. A random USDA audit arrived with just two weeks\' notice, requiring an emergency records scramble. Supervisors had no real-time visibility into their team\'s compliance. Employees had no self-service way to check their own training history. The coordinator bore the full burden of data entry, reporting, and record maintenance.',

  solutionSummary:
    'WaNBRC Train provides a live, role-based compliance dashboard with three distinct access tiers — Employee, Supervisor, and Coordinator — each enforced on both the frontend (RoleGuard) and the backend (Supabase RLS policies). Employees complete and submit trainings; supervisors approve; coordinators administer. A database trigger automatically assigns required trainings when a user\'s job title changes. Agent Train, an AI chat agent powered by Claude, accepts natural-language compliance queries and returns role-scoped reports — making the organization perpetually inspection-ready.',

  audience: 'WaNBRC employees, supervisors, and training coordinators at the University of Washington',

  impactGoal:
    'Replace manual spreadsheet-based training tracking with real-time compliance visibility — eliminating the inspection-time scramble and reducing coordinator overhead.',

  status: 'Live Tool',

  members: [
    {
      name: 'Miranda S Grato',
      role: 'Solo Developer',
      focus: 'Full-stack design and build — React frontend, 10-table Supabase schema, RLS policies, 5 edge functions, Agent Train AI agent, prompt engineering, and all data generation across 250 synthetic users.',
    },
  ],

  gallery: [
    {
      title: 'Coordinator Dashboard',
      caption: 'The coordinator view provides full access to all users and trainings — Manage Trainings, Job Titles, User Management, and History. Agent Train is accessible from the sidebar for on-demand compliance reporting.',
      assetPath: '/project-assets/coordinator-view.png',
    },
    {
      title: 'Supervisor View',
      caption: 'Supervisors see two scoped views: Employee Reports for team-wide compliance status and an Approval Queue for reviewing and approving pending training completions. Access is restricted to their direct reports only.',
      assetPath: '/project-assets/supervisor-view.png',
    },
    {
      title: 'Employee View',
      caption: 'Employees see their personal dashboard with My Profile (role, assignments, account details) and My Report (training compliance and completion status). The Training List and In Progress views are accessible from the sidebar.',
      assetPath: '/project-assets/employee-view.png',
    },
  ],

  stack: [
    {
      category: 'Frontend and Experience',
      tools: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'React Router v6', 'TanStack Query'],
      note: 'Mobile-first layout with role-scoped navigation. RoleGuard components restrict views at the route level. Lovable was used for initial scaffolding and UI iteration before custom logic was applied via Claude Code.',
    },
    {
      category: 'AI and Orchestration',
      tools: ['Claude API (Anthropic)', 'Gemini via Lovable Gateway', 'Supabase Edge Functions (Deno)', 'Custom intent classifier', 'Structured tool calling'],
      note: 'Agent Train classifies natural-language queries into one of several intent types (user lookup, training status, department rollup), fetches role-scoped data from Supabase, and generates a ≤100-word summary via Claude. A dedicated SUMMARY_SYSTEM_PROMPT avoids the identity-guard behavior of the main agent prompt.',
    },
    {
      category: 'Data, Backend, and Integrations',
      tools: ['Supabase (PostgreSQL)', 'Supabase Auth', 'Row-Level Security', 'Database triggers', 'CSV seed scripts'],
      note: '10-table relational schema with RLS on every table. A PostgreSQL trigger auto-assigns required trainings when a user\'s job title changes. All 250 users, 10 job titles, and 40+ trainings were generated synthetically using ChatGPT and seeded via SQL scripts.',
    },
  ],

  features: [
    {
      title: 'Role-Based Dashboards',
      description: 'Three distinct dashboard experiences — Employee, Supervisor, and Coordinator — each with role-appropriate data and actions. Access is enforced at both the React component level (RoleGuard) and the database level (Supabase RLS policies).',
      highlights: [
        'Employees: view assigned trainings, submit completions, check approval status',
        'Supervisors: approve team completions, monitor department compliance in real time',
        'Coordinators: full user and training management, global compliance visibility',
      ],
    },
    {
      title: 'Agent Train — AI Compliance Chat',
      description: 'A natural-language AI chat agent that generates custom training compliance reports scoped to the caller\'s role. Coordinators can query by department, job title, or training category. The agent classifies intent, retrieves data, and returns a structured summary.',
      highlights: [
        'Intent classification routes queries to the correct data retrieval path',
        'Claude API generates concise, role-aware compliance summaries',
        'Hard fallback: if AI returns empty, a regex-based summary builder fires automatically',
      ],
    },
    {
      title: 'Automated Training Assignment',
      description: 'A PostgreSQL database trigger watches for job title changes in the profiles table and automatically assigns all required trainings for the new title. This eliminates the manual assignment step that previously bottlenecked the coordinator.',
      highlights: [
        'Trigger fires on job_title update in profiles table',
        'Trainings are assigned via job_tags → training_tag_assignments junction tables',
        'Existing completions are preserved — only new assignments are created',
      ],
    },
    {
      title: 'Supervisor Approval Workflow',
      description: 'Employees submit training completions for review. Supervisors see a dedicated approval queue scoped to their direct reports only. Approved records update the training log in real time and contribute to compliance reporting.',
      highlights: [
        'Completion submissions create a pending record visible only to the direct supervisor',
        'One-tap approval updates training status and timestamps the record',
        'RLS prevents supervisors from seeing records outside their team',
      ],
    },
    {
      title: 'Job Title Training Suggestion (Agent Train)',
      description: 'Coordinators can ask Agent Train to suggest appropriate trainings for any job title based on the existing training catalog. The agent returns a checklist of recommended trainings (Yes / Maybe) that can be applied to the job title in one click.',
      highlights: [
        'Coordinator-only feature — 403 returned for all other roles',
        'Suggestions rendered as a pre-checked checklist in a side panel',
        'Apply logic upserts job_tags, job_title_tags, and training_tag_assignments',
      ],
    },
  ],

  architecture: [
    {
      title: 'Authentication and Role Detection',
      description: 'Supabase Auth handles login. On session start, the app reads the user\'s profile row to detect their role (employee, supervisor, coordinator) and facility scope.',
    },
    {
      title: 'RoleGuard — Frontend Enforcement',
      description: 'React RoleGuard components wrap all role-restricted routes and UI elements. Users who navigate to a restricted route are redirected immediately — no data is fetched.',
    },
    {
      title: 'Row-Level Security — Backend Enforcement',
      description: 'Every one of the 10 Supabase tables has RLS policies that restrict reads and writes based on the authenticated user\'s role. Even if a user bypasses the frontend, the database returns nothing they are not authorized to see.',
    },
    {
      title: 'Training Assignment Engine',
      description: 'A PostgreSQL trigger fires on job title changes. It looks up the tag set for the new job title and upserts training assignments for every training linked to those tags — automatically and without coordinator intervention.',
    },
    {
      title: 'Agent Train — Intent → Data → Summary',
      description: 'The report-chat edge function receives a natural-language query, classifies the intent via a structured Claude tool call, fetches role-scoped data from Supabase, and passes the result to Claude for a ≤100-word compliance summary.',
    },
  ],

  codeHighlights: [
    {
      title: 'Agent Train — Anthropic API Call',
      language: 'ts',
      note: 'Edge function calls Claude via Anthropic API. Response is normalized to OpenAI shape so all downstream callers are unchanged.',
      code: `async function callAnthropic(messages, tools, systemPrompt) {
  const key = Deno.env.get("Anthropic_API_KEY");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: systemPrompt,
      messages,
      tools,
      tool_choice: { type: "tool", name: tools[0].name },
    }),
  });
  return normalizeAnthropicResponse(await res.json());
}`,
    },
    {
      title: 'Job Title Training Apply Logic',
      language: 'ts',
      note: 'Coordinator applies AI-suggested trainings to a job title. Upserts three junction tables so the DB trigger handles downstream user assignment.',
      code: `async function applyJobTitleTrainings(jobTitleId, jobTitle, trainingIds) {
  // 1. Find or create the job tag
  const { data: tag } = await supabase
    .from('job_tags')
    .upsert({ name: jobTitle }, { onConflict: 'name' })
    .select().single();

  // 2. Link tag to job title
  await supabase.from('job_title_tags').upsert(
    { job_title_id: jobTitleId, job_tag_id: tag.id },
    { onConflict: 'job_title_id,job_tag_id' }
  );

  // 3. Assign each training to the tag
  for (const trainingId of trainingIds) {
    await supabase.from('training_tag_assignments').upsert(
      { training_id: trainingId, job_tag_id: tag.id },
      { onConflict: 'training_id,job_tag_id' }
    );
  }
}`,
    },
  ],

  roadmap: [
    {
      phase: 'Now',
      items: [
        'Live tool with role-based dashboards for Employee, Supervisor, and Coordinator',
        'Agent Train AI chat for compliance report generation',
        'Automated training assignment via database trigger on job title change',
        'Supervisor approval workflow with RLS-enforced team scoping',
        '250-user synthetic dataset across 10 job titles and 40+ trainings',
      ],
    },
    {
      phase: 'Next',
      items: [
        'Fix Agent Train employee listing — classifier should return empty searchQuery for generic role queries',
        'Improve name lookup — switch from exact match to fuzzy full_name search',
        'Add email notification to supervisors when a completion is submitted for approval',
        'Analytics dashboard for coordinators: compliance rate by department and training category',
      ],
    },
    {
      phase: 'Later',
      items: [
        'Formal WaNBRC organizational adoption — pending UW IT security and FERPA review',
        'Integration with UW HR system for real-time job title sync and active/inactive status',
        'Expand Agent Train to support IACUC and USDA inspection report templates',
        'Native mobile app with push notifications for training deadlines',
      ],
    },
  ],

  risks: [
    {
      title: 'Data Privacy and FERPA Compliance',
      mitigation: 'Current deployment uses a 250-user synthetic dataset. Real organizational adoption requires UW IT security review, FERPA compliance assessment, and formal data governance agreement before live employee data can be loaded.',
    },
    {
      title: 'AI Accuracy — Agent Train Query Misclassification',
      mitigation: 'Agent Train can misclassify ambiguous queries or return empty results for generic prompts (e.g., "list all employees"). A regex-based fallback summary builder fires when the AI returns empty data, and known classifier gaps are documented for the next iteration.',
    },
    {
      title: 'Organizational Adoption',
      mitigation: 'The tool was designed around real pain points validated through a stakeholder interview with the WaNBRC training coordinator. The WaNBRC has expressed interest in adoption, but formal onboarding requires IT infrastructure support and coordinator training.',
    },
    {
      title: 'Role Boundary Edge Cases',
      mitigation: 'Acting supervisors, role transitions, and cross-department assignments are not yet fully modeled. Current RLS policies assume stable role assignment. Integration with the UW HR system in a future phase would resolve this by keeping role data authoritative and current.',
    },
  ],
};
