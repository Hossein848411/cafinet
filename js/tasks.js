// js/tasks.js - تسک منیجر اصلاح‌شده (ورژن نهایی)

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('tasks-container');
    let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

    function renderTasks() {
        // پاک کردن محتوای قبلی به جز ورودی (اگر وجود داشته باشه)
        const existingInput = container.querySelector('.task-input-wrapper');
        if (existingInput) existingInput.remove();

        if (tasks.length === 0) {
            container.innerHTML = `
                <div class="text-center py-5 text-muted">
                    <i class="fas fa-check-circle fa-4x mb-3 opacity-50"></i>
                    <h5>هیچ کاری ثبت نشده</h5>
                    <p>کارهای خود را از پایین اضافه کنید</p>
                </div>
            `;
        } else {
            container.innerHTML = `
                <ul class="list-group list-group-flush">
                    ${tasks.map((task, index) => `
                        <li class="list-group-item d-flex align-items-center py-3 ${task.completed ? 'text-muted bg-light' : ''}">
                            <input type="checkbox" class="form-check-input me-3 flex-shrink-0" ${task.completed ? 'checked' : ''} data-index="${index}">
                            <span class="flex-grow-1 ${task.completed ? 'text-decoration-line-through' : ''}">
                                ${task.text}
                            </span>
                            <button class="btn btn-sm btn-danger ms-2 flex-shrink-0" data-index="${index}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </li>
                    `).join('')}
                </ul>
            `;
        }

        // همیشه ورودی اضافه کردن تسک جدید رو در پایین قرار بده
        addInputBox();
        attachTaskEvents();
    }

    function addInputBox() {
        // جلوگیری از اضافه شدن چندباره
        if (container.querySelector('.task-input-wrapper')) return;

        const inputWrapper = document.createElement('div');
        inputWrapper.className = 'task-input-wrapper p-3 border-top bg-light';
        inputWrapper.innerHTML = `
            <div class="input-group">
                <input type="text" id="new-task-input" class="form-control" placeholder="کار جدید را وارد کنید و اینتر بزنید..." aria-label="کار جدید">
                <button class="btn btn-success" type="button" id="add-task-btn">
                    <i class="fas fa-plus"></i> افزودن
                </button>
            </div>
        `;
        container.appendChild(inputWrapper);

        const input = document.getElementById('new-task-input');
        const btn = document.getElementById('add-task-btn');

        const addTask = () => {
            const text = input.value.trim();
            if (text) {
                tasks.push({ text, completed: false });
                saveAndRender();
                input.value = '';
                input.focus();
            }
        };

        btn.addEventListener('click', addTask);
        input.addEventListener('keypress', e => {
            if (e.key === 'Enter') addTask();
        });

        // فوکوس خودکار روی ورودی
        input.focus();
    }

    function attachTaskEvents() {
        // تیک زدن تسک
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const index = parseInt(this.dataset.index);
                tasks[index].completed = this.checked;
                saveAndRender();
            });
        });

        // حذف تسک
        document.querySelectorAll('button.btn-danger').forEach(btn => {
            btn.addEventListener('click', function () {
                const index = parseInt(this.dataset.index);
                if (confirm('این کار را حذف می‌کنید؟')) {
                    tasks.splice(index, 1);
                    saveAndRender();
                }
            });
        });
    }

    function saveAndRender() {
        localStorage.setItem('myTasks', JSON.stringify(tasks));
        renderTasks();
    }

    // شروع اولیه
    renderTasks();
});