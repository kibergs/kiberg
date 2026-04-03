const TASKS = [
  {
    id: 1,
    title: "Расхламить балкон",
    action: {
      type: "subtasks",
      label: "Подзадачи",
      meta: "Нажми на подзадачу, чтобы увидеть шаг.",
      items: [
        "Подготовить место для выкидывания досок",
        "Распиливать доски и складывать их в место выкидывания",
        "Закрепить доски",
        "Выкинуть доски",
        "Убрать вещи на балконе",
        "Пропылесосить",
        "Вернуть вещи на место"
      ]
    }
  },
  {
    id: 2,
    title: "Добавить description в блог Сипуни",
    action: {
      type: "link",
      label: "Открыть ссылку",
      value: "https://tilda.ru/projects/settings/?projectid=7532289"
    }
  },
  {
    id: 3,
    title: "Домонтировать видео по звонилке",
    action: {
      type: "app",
      label: "Открыть программу",
      value: "C:\\Users\\Мария\\AppData\\Local\\CapCut\\Apps\\8.3.0.3497\\CapCut.exe"
    }
  },
  {
    id: 4,
    title: "Составить свой OKR",
    action: {
      type: "link",
      label: "Открыть ссылку",
      value:
        "https://docs.google.com/spreadsheets/d/1S6YwVvu6E4cQn8gqwe9Ynqo-NWiMItcHXiv5F34NEOo/edit?gid=1406862300#gid=1406862300"
    }
  },
  {
    id: 5,
    title: "Обновить Habit Tracker",
    action: {
      type: "link",
      label: "Открыть ссылку",
      value:
        "https://docs.google.com/spreadsheets/d/1VsxwZiQmz6ZOhGlRyFwgt9V8WVn5XpCevzeWG1d4LPw/edit?gid=0#gid=0"
    }
  },
  {
    id: 6,
    title: "Выпустить газету АМОКОНФ",
    action: {
      type: "link",
      label: "Открыть ссылку",
      value: "https://sipuni.planfix.ru/task/237715"
    }
  },
  {
    id: 7,
    title: "Придумать вопросы для Медникова",
    action: {
      type: "hint",
      label: "Показать подсказку",
      value: "Экспортируй историю чата и собери фактуру по Медникову."
    }
  },
  {
    id: 8,
    title: "Провести интервью с Медниковым",
    action: {
      type: "hint",
      label: "Показать подсказку",
      value: "Сначала покажи вопросы и письмо Свете."
    }
  },
  {
    id: 9,
    title: "Домонтировать все видео в блог",
    action: {
      type: "app",
      label: "Открыть программу",
      value: "C:\\Users\\Мария\\AppData\\Local\\CapCut\\Apps\\8.3.0.3497\\CapCut.exe"
    }
  },
  {
    id: 10,
    title: "Опубликовать все видео в блог",
    action: {
      type: "subtasks",
      label: "Подзадачи",
      meta: "Нажми на подзадачу, чтобы увидеть шаг.",
      items: [
        "Отложи YouTube",
        "Отложи Instagram",
        "Положи в черновики TikTok",
        "Добавь будильники для выпуска",
        "Выпускай в TikTok по будильнику"
      ]
    }
  },
  {
    id: 11,
    title: "Уточнить по упаковкам джиббитсов",
    action: {
      type: "app",
      label: "Открыть приложение",
      value: "WhatsApp"
    }
  },
  {
    id: 12,
    title: "Пойти на тренировку в Олимпию",
    action: {
      type: "hint",
      label: "Показать подсказку",
      value: "Собери воду, возьми карточку и иди туда, где уже был."
    }
  },
  {
    id: 13,
    title: "Прибрать десктоп",
    action: {
      type: "hint",
      label: "Показать действие",
      value: "Сверни все окна на компьютере."
    }
  },
  {
    id: 14,
    title: "Скрыть иноагентские разборы",
    action: {
      type: "hint",
      label: "Показать подсказку",
      value: "Открой TikTok и начни с начала."
    }
  },
  {
    id: 15,
    title: "Подать заявку блогера в РКН",
    action: {
      type: "hint",
      label: "Показать подсказку",
      value: "Открой Госуслуги."
    }
  },
  {
    id: 16,
    title: "Узнать, могу ли я продавать курс",
    action: {
      type: "hint",
      label: "Показать подсказку",
      value: "Дай задачу ChatGPT, он узнает."
    }
  },
  {
    id: 17,
    title: "Записать весь курс по гитаре",
    action: {
      type: "link",
      label: "Открыть файл",
      value: "file:///K:/Загрузки/Chrome/guitar_course_motivation_app_v2.html"
    }
  },
  {
    id: 18,
    title: "Смонтировать весь курс по гитаре",
    action: {
      type: "link",
      label: "Открыть файл",
      value: "file:///K:/Загрузки/Chrome/guitar_course_motivation_app_v2.html"
    }
  },
  {
    id: 19,
    title: "Воскресить блог (по ощущениям)",
    action: {
      type: "hint",
      label: "Показать подсказку",
      value: "Если видео набрало 50К просмотров — ты воскресил блог."
    }
  },
  {
    id: 20,
    title: "Проколоть уши",
    action: {
      type: "hint",
      label: "Показать подсказку",
      value: "Узнай, где лучше сделать."
    }
  },
  {
    id: 21,
    title: "Быть готовым к АМОКОНФ",
    action: {
      type: "link",
      label: "Открыть ссылку",
      value: "https://sipuni.planfix.ru/task/231844"
    }
  },
  {
    id: 22,
    title: "Написать 60 постов в Telegram",
    action: {
      type: "link",
      label: "Открыть ссылку",
      value: "https://t.me/kibergs"
    }
  },
  {
    id: 23,
    title: "Анонсировать курс",
    action: {
      type: "link",
      label: "Открыть ссылку",
      value: "https://t.me/kibergs"
    }
  },
  {
    id: 24,
    title: "Boosty — добавить видео как я делаю табы и разборы",
    action: {
      type: "link",
      label: "Открыть ссылку",
      value: "https://boosty.to/kiberg"
    }
  },
  {
    id: 25,
    title: "Заказать настольный футбол на АМОКОНФ",
    action: {
      type: "link",
      label: "Открыть ссылку",
      value:
        "https://www.google.com/search?q=%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB+%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&oq=%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB+%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI1MDVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    }
  },
  {
    id: 26,
    title: "Подготовиться к военкомату",
    action: {
      type: "hint",
      label: "Показать подсказку",
      value: "Найди повестку и посмотри, что там."
    }
  }
];

const STORAGE_KEY = "kiberg-task-status";

const taskList = document.getElementById("taskList");
const taskTemplate = document.getElementById("taskTemplate");
const subtaskTemplate = document.getElementById("subtaskTemplate");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const progressTrack = document.querySelector(".progress__track");

const statusById = loadStatus();

renderTasks();
updateProgress();

function loadStatus() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function saveStatus() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(statusById));
}

function renderTasks() {
  taskList.innerHTML = "";

  for (const task of TASKS) {
    const node = taskTemplate.content.firstElementChild.cloneNode(true);
    const checkbox = node.querySelector(".task-checkbox");
    const title = node.querySelector(".task-title");
    const actionButton = node.querySelector(".task-action");
    const meta = node.querySelector(".task-meta");
    const subtaskList = node.querySelector(".subtask-list");

    title.textContent = `${task.id}. ${task.title}`;
    checkbox.checked = Boolean(statusById[task.id]);
    node.classList.toggle("is-done", checkbox.checked);

    checkbox.addEventListener("change", () => {
      statusById[task.id] = checkbox.checked;
      saveStatus();
      node.classList.toggle("is-done", checkbox.checked);
      updateProgress();
    });

    setupAction(task, actionButton, meta, subtaskList);

    taskList.append(node);
  }
}

function setupAction(task, actionButton, meta, subtaskList) {
  const { action } = task;
  actionButton.textContent = action.label;

  if (action.type === "subtasks") {
    meta.textContent = action.meta;

    for (const subtask of action.items) {
      const subtaskNode = subtaskTemplate.content.firstElementChild.cloneNode(true);
      const subtaskButton = subtaskNode.querySelector(".subtask-button");
      subtaskButton.textContent = subtask;
      subtaskButton.addEventListener("click", () => {
        alert(`Подзадача: ${subtask}`);
      });
      subtaskList.append(subtaskNode);
    }

    actionButton.addEventListener("click", () => {
      subtaskList.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    return;
  }

  if (action.type === "link") {
    meta.textContent = action.value;
    actionButton.addEventListener("click", () => {
      window.open(action.value, "_blank", "noopener,noreferrer");
    });
    return;
  }

  if (action.type === "hint") {
    meta.textContent = "Подсказка для шага";
    actionButton.addEventListener("click", () => {
      alert(action.value);
    });
    return;
  }

  if (action.type === "app") {
    meta.textContent = action.value;
    actionButton.addEventListener("click", () => {
      navigator.clipboard
        .writeText(action.value)
        .then(() => {
          alert("Путь скопирован в буфер обмена. Вставь и открой вручную на компьютере.");
        })
        .catch(() => {
          alert(`Открой вручную: ${action.value}`);
        });
    });
  }
}

function updateProgress() {
  const completed = TASKS.filter((task) => Boolean(statusById[task.id])).length;
  const total = TASKS.length;
  const percent = Math.round((completed / total) * 100);

  progressText.textContent = `${completed} / ${total}`;
  progressFill.style.width = `${percent}%`;
  progressTrack.setAttribute("aria-valuenow", String(completed));
}
