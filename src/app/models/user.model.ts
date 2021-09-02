import { FilesModel } from './files.model';
import { TestModel } from './tests.model';

export class UserModel {
    id?: number;
    phone: number | undefined;
    full_name: string | undefined;
    english_level?: string;
    email: string | undefined;
    venue: string | undefined;
    origin_type: string | undefined;
    mind_university?: boolean;
    mind_teams?: boolean;
    date_entry_mind_u?: string;
    date_entry_mind_teams?: string;
    days_mind_u?: number;
    days_mind_t?: number;
    date_user: string | undefined;
    filess: FilesModel | undefined;
    tests: TestModel[] | undefined;
    city_id: number | undefined;
}