export interface Form {
  formType: string;
}

export interface DividendJOPPD extends Form {
  formDate: string;
  paymentDate: string;
  amount: number;
  currency: string;
  startDate: string;
  endDate: string;
}

export interface SalaryJOPPD extends Form {
  formDate: string;
  paymentDate: string;
  amount: number;
  currency: string;
  salaryMonth: string;
}

