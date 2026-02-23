
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






