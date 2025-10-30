---
id: exercicio-todo-changenotifier
title: Gerenciador de Tarefas com ChangeNotifier
---

### Enunciado

Crie um aplicativo Flutter que permita ao usuário:

- Adicionar novas tarefas.
- Remover tarefas individualmente.
- Limpar todas as tarefas.
- Utilizar `ChangeNotifier` para atualizar a interface **sem utilizar `Provider`**.

### Requisitos

1. Criar uma classe `TaskController` que:

   - Estenda `ChangeNotifier`.
   - Contenha uma lista de tarefas.
   - Tenha métodos para:
     - Adicionar uma nova tarefa.
     - Remover tarefa pelo índice.
     - Limpar todas as tarefas.
   - Utilize `notifyListeners()` para notificar mudanças.

2. Na interface:
   - Um campo de texto para digitar o nome da tarefa.
   - Um botão para adicionar a tarefa.
   - Uma lista exibindo as tarefas em tempo real.
   - Um botão ao lado de cada tarefa para removê-la.
   - Um botão na `AppBar` para limpar todas as tarefas.
   - Use `addListener()` no `StatefulWidget` para atualizar a interface.

---

## COMO RESOLVER?

### 1. `task_controller.dart`

```dart
import 'package:flutter/material.dart';

class TaskController extends ChangeNotifier {
  final List<String> _tasks = [];

  List<String> get tasks => List.unmodifiable(_tasks);

  void addTask(String task) {
    if (task.trim().isNotEmpty) {
      _tasks.add(task);
      notifyListeners();
    }
  }

  void removeTask(int index) {
    _tasks.removeAt(index);
    notifyListeners();
  }

  void clearTasks() {
    _tasks.clear();
    notifyListeners();
  }
}

```

### 2. `main.dart`

```dart
import 'package:flutter/material.dart';
import 'task_controller.dart';

void main() {
  runApp(const TaskApp());
}

class TaskApp extends StatelessWidget {
  const TaskApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Task Manager',
      home: TaskHomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

```

### 3. `task_home_page.dart`

```dart
import 'package:flutter/material.dart';
import 'task_controller.dart';

class TaskHomePage extends StatefulWidget {
  const TaskHomePage({super.key});

  @override
  State<TaskHomePage> createState() => _TaskHomePageState();
}

class _TaskHomePageState extends State<TaskHomePage> {
  final TextEditingController _textController = TextEditingController();
  final TaskController _taskController = TaskController();

  @override
  void initState() {
    super.initState();
    _taskController.addListener(_onTasksChanged);
  }

  void _onTasksChanged() {
    setState(() {});
  }

  @override
  void dispose() {
    _taskController.removeListener(_onTasksChanged);
    _textController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Gerenciador de Tarefas'),
        actions: [
          IconButton(
            icon: const Icon(Icons.delete_forever),
            onPressed: _taskController.clearTasks,
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              controller: _textController,
              decoration: const InputDecoration(
                labelText: 'Digite uma nova tarefa',
              ),
              onSubmitted: (_) => _addTask(),
            ),
            const SizedBox(height: 10),
            ElevatedButton(
              onPressed: _addTask,
              child: const Text('Adicionar'),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: _taskController.tasks.length,
                itemBuilder: (context, index) {
                  final task = _taskController.tasks[index];
                  return ListTile(
                    title: Text(task),
                    trailing: IconButton(
                      icon: const Icon(Icons.delete),
                      onPressed: () => _taskController.removeTask(index),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _addTask() {
    _taskController.addTask(_textController.text);
    _textController.clear();
  }
}

```
