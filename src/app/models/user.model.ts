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
    type_mind?: string;
    date_entry_mind?: string;
    days_mind?: number;
    date_user: string | undefined;
    filess: FilesModel | undefined;
    tests: TestModel[] | undefined;
    city_id: number | undefined;
}