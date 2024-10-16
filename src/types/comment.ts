export interface AlreadyAssignedCommentArg {
  unassigned_date: string;
  handle: string;
  assignee: string;
}

export interface AssignUserCommentArg {
  unassigned_date: Date;
  total_days: number;
  handle: string;
  pin_label: string;
}

export interface UnAssignUserCommentArg {
  handle: string;
}
