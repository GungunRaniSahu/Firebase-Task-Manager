import { auth, db } from './firebase-config.js';
import { collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

function addTask() {
    const taskInput = document.getElementById("taskInput").value.trim();
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;
    const user = auth.currentUser;

    if (!user || !taskInput) {
        alert("Please log in and enter a task.");
        return;
    }

    addDoc(collection(db, "tasks"), {
        task: taskInput,
        priority: priority,
        dueDate: dueDate,
        userId: user.uid,
        completed: false
    }).then(() => {
        document.getElementById("taskInput").value = "";
    }).catch(error => alert(error.message));
}

function fetchTasks() {
    const taskList = document.getElementById("taskList");
    const user = auth.currentUser;

    if (!user) return;

    onSnapshot(collection(db, "tasks"), (snapshot) => {
        taskList.innerHTML = "";
        snapshot.forEach(doc => {
            const taskData = doc.data();
            if (taskData.userId === user.uid) {
                let li = document.createElement("li");
                li.innerHTML = `
                    <span class="${taskData.completed ? 'completed' : ''}">
                        ${taskData.task} (${taskData.priority} - ${taskData.dueDate})
                    </span>
                    <div class="task-actions">
                        <button class="done-btn" onclick="markAsDone('${doc.id}', ${taskData.completed})">✅ Done</button>
                        <button class="edit-btn" onclick="editTask('${doc.id}', '${taskData.task}')">✏️ Edit</button>
                        <button class="delete-btn" onclick="deleteTask('${doc.id}')">❌ Delete</button>
                    </div>
                `;
                taskList.appendChild(li);
            }
        });
    });
}


function markAsDone(taskId, currentStatus) {
    updateDoc(doc(db, "tasks", taskId), { completed: !currentStatus })
        .then(() => {
            document.getElementById(`task-${taskId}`).style.textDecoration = !currentStatus ? 'line-through' : 'none';
        })
        .catch(error => alert(error.message));
}




function editTask(taskId, oldTask) {
    const newTask = prompt("Edit Task:", oldTask);
    if (newTask && newTask.trim() !== "") {
        updateDoc(doc(db, "tasks", taskId), { task: newTask.trim() })
            .catch(error => alert(error.message));
    }
}

function deleteTask(taskId) {
    if (confirm("Are you sure you want to delete this task?")) {
        deleteDoc(doc(db, "tasks", taskId))
            .catch(error => alert(error.message));
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        fetchTasks();
    } else {
        alert("Please log in to manage tasks.");
        window.location.href = "index.html";
    }
});

window.addTask = addTask;
window.markAsDone = markAsDone;
window.editTask = editTask;
window.deleteTask = deleteTask;
