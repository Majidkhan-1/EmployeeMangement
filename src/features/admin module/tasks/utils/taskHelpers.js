import { TASK_PRIORITIES, TASK_STATUSES } from "../constants/taskConstants";

export const getErrorMessage = (error) =>
  error?.response?.data?.message || error?.message || "Something went wrong";

export const getStatusLabel = (status) =>
  TASK_STATUSES.find((item) => item.value === status)?.label || status || "Unknown";

export const getPriorityLabel = (priority) =>
  TASK_PRIORITIES.find((item) => item.value === priority)?.label || priority || "Unknown";

export const getInitials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

export const getAssignee = (task, employees = []) => {
  const assignee = task?.assignedTo;
  if (!assignee) return null;
  if (typeof assignee === "object") return assignee;
  return employees.find((employee) => employee._id === assignee) || null;
};

export const formatDate = (date) => {
  if (!date) return "—";
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "—";
  return parsedDate.toLocaleDateString();
};

export const isOverdue = (task) => {
  if (!task?.dueDate || task.status === "completed") return false;
  const dueDate = new Date(task.dueDate);
  if (Number.isNaN(dueDate.getTime())) return false;
  dueDate.setHours(23, 59, 59, 999);
  return dueDate < new Date();
};

