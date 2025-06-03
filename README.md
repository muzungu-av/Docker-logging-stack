# Promtail + Loki: Логи только нужных контейнеров (backend, frontend)

Конфигурация для сбора логов из Docker-контейнеров с использованием Promtail и Loki.
Собираются только логи контейнеров `backend` и `frontend`, исключая системные сервисы (`grafana`, `loki`, `promtail` и т.п.).

## Особенности

- Фильтрация логов по `container_name`
- Исключение лишних логов (Grafana, Loki и др.)
- Сбор только `stdout` и `stderr`
- Поддержка сохранения логов после перезапуска контейнеров
- Интеграция с Grafana для визуализации

## Примеры LogQL-запросов

```logql
# Ошибки из backend
{container_name="backend"} |= "error"

# Предупреждения из frontend, если логи в JSON
{container_name="frontend"} | json | level="warn"
```

## Рекомендации

- Используйте `json-file` драйвер логирования для контейнеров
- Настройте volume-хранилище Promtail, если хотите сохранять позиции между перезапусками
- Не логируйте в файлы внутри контейнеров — используйте stdout/stderr

---

 Основано на:

- [Promtail docs](https://grafana.com/docs/loki/latest/clients/promtail/)
- [Loki + Docker setup](https://grafana.com/docs/loki/latest/)

---
