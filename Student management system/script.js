// Mock data for students and teachers
const users = [
    { username: "student1", password: "student1pass", role: "student", id: 1 },
    { username: "teacher1", password: "teacher1pass", role: "teacher", id: 2 },
];

const studentData = {
    attendance: "85%",
    grades: { Math: "A", Science: "B" },
    timetable: {
        Monday: "Math, Science",
        Tuesday: "English, History"
    }
};

const staffData = {
    attendance: {},
    grades: {}
};

// Handle Login
document.getElementById("login-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const user = users.find(user => user.username === username && user.password === password && user.role === role);

    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        if (role === "student") {
            window.location.href = "student-dashboard.html";
        } else {
            window.location.href = "teacher-dashboard.html";
        }
    } else {
        alert("Invalid credentials.");
    }
});

// Handle Logout
document.getElementById("logout")?.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "login.html";
});

// Student Features
if (document.getElementById("check-attendance")) {
    document.getElementById("check-attendance").addEventListener("click", () => {
        alert(`Your Attendance: ${studentData.attendance}`);
    });
}

if (document.getElementById("check-grades")) {
    document.getElementById("check-grades").addEventListener("click", () => {
        alert(`Grades: \nMath: ${studentData.grades.Math} \nScience: ${studentData.grades.Science}`);
    });
}

if (document.getElementById("check-timetable")) {
    document.getElementById("check-timetable").addEventListener("click", () => {
        alert(`Timetable: \nMonday: ${studentData.timetable.Monday} \nTuesday: ${studentData.timetable.Tuesday}`);
    });
}

// Teacher Features (Update Attendance and Grades)
if (document.getElementById("update-attendance")) {
    document.getElementById("update-attendance").addEventListener("click", () => {
        document.getElementById("update-attendance-modal").style.display = "block";
    });
}

if (document.getElementById("update-grades")) {
    document.getElementById("update-grades").addEventListener("click", () => {
        document.getElementById("update-grades-modal").style.display = "block";
    });
}

// Modal Close Handlers
const closeModal = (modalId) => {
    document.getElementById(modalId).style.display = "none";
};

document.getElementById("close-update-attendance")?.addEventListener("click", () => closeModal("update-attendance-modal"));
document.getElementById("close-update-grades")?.addEventListener("click", () => closeModal("update-grades-modal"));
