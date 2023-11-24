// ERRORS

export interface APIError {
  status_code: number;
  error: string;
  message: string;
  extension?: {
    code?: string;
    reason?: string;
    state?: Record<string, any>;
  };
}
