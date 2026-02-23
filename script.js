
var jobs = [
    { id: "j1", companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile features, improve performance, and ship reliable releases.", status: "none" },
    { id: "j2", companyName: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", description: "Design marketing sites, create reusable UI blocks, and deliver accessible pages.", status: "none" },
    { id: "j3", companyName: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", description: "Build clear dashboards, craft charts, and help teams understand data quickly.", status: "none" },
    { id: "j4", companyName: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", description: "Design APIs, improve database performance, and build scalable services.", status: "none" },
    { id: "j5", companyName: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", description: "Create polished components and ensure a smooth responsive experience.", status: "none" },
    { id: "j6", companyName: "FinGuard", position: "Junior Full Stack Engineer", location: "New York, NY", type: "Hybrid", salary: "$95,000 - $120,000", description: "Work on secure features, improve tests, and ship product improvements.", status: "none" },
    { id: "j7", companyName: "HealthBridge", position: "Frontend Engineer (React)", location: "Toronto, ON", type: "Remote", salary: "$105,000 - $140,000", description: "Build user-friendly forms, handle validation, and improve accessibility.", status: "none" },
    { id: "j8", companyName: "OpsPilot", position: "DevOps Engineer", location: "Berlin, DE", type: "Full-time", salary: "€85,000 - €120,000", description: "Improve CI/CD pipelines and help teams deploy safely and faster.", status: "none" }
];

// ---------------------------
var pageSubtitle = document.getElementById("pageSubtitle");
var cardsWrap = document.getElementById("cardsWrap");
var emptyState = document.getElementById("emptyState");

var countTotal = document.getElementById("countTotal");
var countInterview = document.getElementById("countInterview");
var countRejected = document.getElementById("countRejected");
var tabCount = document.getElementById("tabCount");

// Using getElementsByClassName (returns HTMLCollection)
var tabButtons = document.getElementsByClassName("tab-btn");


var activeTab = "all"; // all | interview | rejected



function getCounts() {
    var interview = 0;
    var rejected = 0;

    for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "interview") interview++;
    if (jobs[i].status === "rejected") rejected++;
    }

    return { total: jobs.length, interview: interview, rejected: rejected };
}

function getFilteredJobs() {
    if (activeTab === "all") return jobs;

    var result = [];
    for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].status === activeTab) result.push(jobs[i]);
    }
    return result;
}

function statusBadge(status) {
    if (status === "interview") {
    return `<span class="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-100">INTERVIEW</span>`;
    }
    if (status === "rejected") {
    return `<span class="inline-flex items-center rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-700 ring-1 ring-rose-100">REJECTED</span>`;
    }
    return `<span class="inline-flex items-center rounded-md bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600 ring-1 ring-slate-100">NOT APPLIED</span>`;
}

function makeCard(job) {
    var interviewActive = job.status === "interview";
    var rejectedActive = job.status === "rejected";

    return `
    <article class="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
        <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
            <h4 class="truncate test-lg font-semibold text-slate-900">${job.companyName}</h4>
            <p class="mt-0.5 test-base font-medium text-slate-600">${job.position}</p>

            <div class="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
            <span class="inline-flex items-center rounded-md bg-slate-50 px-2 py-0.5 ring-1 ring-slate-100">${job.location}</span>
            <span class="inline-flex items-center rounded-md bg-slate-50 px-2 py-0.5 ring-1 ring-slate-100">${job.type}</span>
            <span class="inline-flex items-center rounded-md bg-slate-50 px-2 py-0.5 ring-1 ring-slate-100">${job.salary}</span>
            </div>

            <div class="mt-3">${statusBadge(job.status)}</div>

            <p class="mt-3 test-base leading-relaxed text-slate-600">${job.description}</p>

            <div class="mt-4 flex flex-wrap gap-2">
            <button class="action-btn rounded-md border px-3 py-1.5 test-base font-semibold
                ${interviewActive ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}"
                data-action="interview" data-id="${job.id}">
                Interview
            </button>

            <button class="action-btn rounded-md border px-3 py-1.5 test-base font-semibold
                ${rejectedActive ? "border-rose-200 bg-rose-50 text-rose-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}"
                data-action="rejected" data-id="${job.id}">
                Rejected
            </button>
            </div>
        </div>

        <button class="delete-btn shrink-0 rounded-md border border-slate-200 bg-white p-2 text-slate-500 hover:bg-slate-50"
            data-action="delete" data-id="${job.id}" title="Delete">
            🗑️
        </button>
        </div>
    </article>
    `;
}




