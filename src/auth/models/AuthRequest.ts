import { Request } from 'express';
import { Company } from '../../company/entities/company.entity';

export interface AuthRequest extends Request {
  user: Company;
}
