import { AxiosInstance } from "axios";
import { IDefaultArg, IConfig } from "./interpaces";
import { IMealInfoRequest, ISchoolInfoRequest, IClassInfoRequest, IMajorInfoRequest, IAflcoInfoRequest, ITimeClassroomInfoRequest, IScheduleRequest, ITimetableRequest } from "./interpaces/request";
import { ISchoolInfoRow, IMealInfoRow, IClassInfoRow, IMajorInfoRow, IAflcoInfoRow, ITimeClassroomInfoRow, IScheduleRow, ITimetableRow } from "./interpaces/response";
declare class Neis {
    key: string;
    api: AxiosInstance;
    constructor({ KEY, Type }: IDefaultArg);
    getSchoolInfo(args: ISchoolInfoRequest, config?: IConfig): Promise<ISchoolInfoRow[]>;
    getMealInfo(args: IMealInfoRequest, config?: IConfig): Promise<IMealInfoRow[]>;
    getClassInfo(args: IClassInfoRequest, config?: IConfig): Promise<IClassInfoRow[]>;
    getMajorInfo(args: IMajorInfoRequest, config?: IConfig): Promise<IMajorInfoRow[]>;
    getAflcoInfo(args: IAflcoInfoRequest, config?: IConfig): Promise<IAflcoInfoRow[]>;
    getTimeClassroomInfo(args: ITimeClassroomInfoRequest, config?: IConfig): Promise<ITimeClassroomInfoRow[]>;
    getSchedule(args: IScheduleRequest, config?: IConfig): Promise<IScheduleRow[]>;
    getTimetable(schoolData: ISchoolInfoRequest, args: ITimetableRequest, config?: IConfig): Promise<ITimetableRow[]>;
}
export default Neis;
