// notes.js - مدیریت کامل یادداشت‌های شخصی با localStorage

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('notes-container');
    let notes = JSON.parse(localStorage.getItem('personalNotes')) || [];

    // رندر اولیه یادداشت‌ها (جدیدترین بالا)
    function renderNotes() {
        if (notes.length === 0) {
            container.innerHTML = `
                <div class="empty-notes">
                    <i class="fas fa-sticky-note"></i>
                    <h5 class="mt-3 text-muted">هنوز یادداشتی اضافه نکردید</h5>
                    <p class="text-muted">با دکمه زیر اولین یادداشت خود را بسازید</p>
                </div>
            `;
            addNewNoteButton();
            return;
        }

        container.innerHTML = '';
        notes.slice().reverse().forEach((note, index) => {
            const reversedIndex = notes.length - 1 - index;
            const noteElement = document.createElement('div');
            noteElement.className = 'note-item mb-3';
            noteElement.innerHTML = `
                <div class="note-header collapsed" data-index="${reversedIndex}">
                    <span>${note.title || 'بدون عنوان'}</span>
                    <i class="fas fa-chevron-up rotate"></i>
                </div>
                <div class="note-body">
                    <input type="text" class="note-title-input form-control" value="${note.title || ''}" placeholder="عنوان یادداشت...">
                    <textarea class="note-textarea form-control">${note.content || ''}</textarea>
                    <div class="note-actions">
                        <button class="btn btn-sm btn-delete-note">
                            <i class="fas fa-trash"></i> حذف
                        </button>
                        <button class="btn btn-sm btn-save-note">
                            <i class="fas fa-save"></i> ذخیره
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(noteElement);
        });

        attachEventListeners();
        addNewNoteButton();
    }

    // دکمه اضافه کردن یادداشت جدید
    function addNewNoteButton() {
        if (document.getElementById('add-new-note')) return;

        const btn = document.createElement('button');
        btn.id = 'add-new-note';
        btn.innerHTML = '<i class="fas fa-plus me-2"></i> اضافه کردن یادداشت جدید';
        btn.addEventListener('click', () => {
            notes.push({ title: '', content: '' });
            renderNotes();
            // باز کردن خودکار یادداشت جدید
            setTimeout(() => {
                const headers = document.querySelectorAll('.note-header');
                if (headers.length > 0) headers[0].click();
            }, 100);
        });
        container.prepend(btn);
    }

    // اتصال ایونت‌ها
    function attachEventListeners() {
        // باز و بسته کردن آکاردئون
        document.querySelectorAll('.note-header').forEach(header => {
            header.addEventListener('click', function () {
                this.classList.toggle('collapsed');
                const body = this.nextElementSibling;
                if (body.classList.contains('show')) {
                    body.classList.remove('show');
                } else {
                    body.classList.add('show');
                }
            });
        });

        // دکمه ذخیره
        document.querySelectorAll('.btn-save-note').forEach(btn => {
            btn.addEventListener('click', function () {
                const noteItem = this.closest('.note-item');
                const index = noteItem.querySelector('.note-header').dataset.index;
                const title = noteItem.querySelector('.note-title-input').value.trim();
                const content = noteItem.querySelector('.note-textarea').value;

                notes[index] = { title, content };
                localStorage.setItem('personalNotes', JSON.stringify(notes));

                // بروزرسانی عنوان در هدر
                noteItem.querySelector('.note-header span').textContent = title || 'بدون عنوان';

                alert('یادداشت با موفقیت ذخیره شد!');
            });
        });

        // دکمه حذف
        document.querySelectorAll('.btn-delete-note').forEach(btn => {
            btn.addEventListener('click', function () {
                if (confirm('آیا از حذف این یادداشت مطمئن هستید؟')) {
                    const noteItem = this.closest('.note-item');
                    const index = noteItem.querySelector('.note-header').dataset.index;
                    notes.splice(index, 1);
                    localStorage.setItem('personalNotes', JSON.stringify(notes));
                    renderNotes();
                }
            });
        });
    }

    // شروع اولیه
    renderNotes();
});