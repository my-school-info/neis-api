import axios, { AxiosInstance } from "axios";
import { IDefaultArg, IConfig } from "./interpaces";
import { IMealInfoRequest, ISchoolInfoRequest, IClassInfoRequest, IMajorInfoRequest, IAflcoInfoRequest, ITimeClassroomInfoRequest, IScheduleRequest, ITimetableRequest, ISpecialTimetableRequest } from "./interpaces/request";
import { IMealInfoResponse, ISchoolInfoResponse, IClassInfoResponse, IMajorInfoResponse, IAflcoInfoResponse, ITimeClassroomInfoResponse, IScheduleResponse, ITimeTableResponse, ISpecialTimeTableResponse } from "./interpaces/response";
import { ISchoolInfoRow, IMealInfoRow, IClassInfoRow, IMajorInfoRow, IAflcoInfoRow, ITimeClassroomInfoRow, IScheduleRow, ITimetableRow, ISpecialTimetableRow } from "./interpaces/response";

class Neis {
	public key: string;
	public api: AxiosInstance;

	constructor({ KEY, Type }: IDefaultArg) {
		this.key = KEY;
		this.api = axios.create({ baseURL: "https://open.neis.go.kr/hub", params: { KEY, Type } });
	}

	public async getSchoolInfo(args: ISchoolInfoRequest, config?: IConfig): Promise<ISchoolInfoRow[]> {
		if (Object.keys(args).length <= 0) throw new Error("최소 1개 이상의 신청인자가 필요합니다.");

		const { data } = await this.api.get("/schoolInfo", { params: { ...config, ...args } });
		const schoolInfo: ISchoolInfoResponse = data.schoolInfo;

		if (schoolInfo) {
			return schoolInfo[1].row;
		} else {
			throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
		}
	}

	public async getMealInfo(args: IMealInfoRequest, config?: IConfig): Promise<IMealInfoRow[]> {
		if (!args.ATPT_OFCDC_SC_CODE || !args.SD_SCHUL_CODE) throw new Error("시도교육청코드, 표준학교코드 인자 값이 필요합니다.");

		const { data } = await this.api.get("/mealServiceDietInfo", { params: { ...config, ...args } });
		const mealInfo: IMealInfoResponse = data.mealServiceDietInfo;

		if (mealInfo) {
			return mealInfo[1].row;
		} else {
			throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
		}
	}

	public async getClassInfo(args: IClassInfoRequest, config?: IConfig): Promise<IClassInfoRow[]> {
		if (!args.ATPT_OFCDC_SC_CODE || !args.SD_SCHUL_CODE) throw new Error("시도교육청코드, 표준학교코드 인자 값이 필요합니다.");

		const { data } = await this.api.get("/classInfo", { params: { ...config, ...args } });
		const classInfo: IClassInfoResponse = data.classInfo;

		if (classInfo) {
			return classInfo[1].row;
		} else {
			throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
		}
	}

	public async getMajorInfo(args: IMajorInfoRequest, config?: IConfig): Promise<IMajorInfoRow[]> {
		if (!args.ATPT_OFCDC_SC_CODE) throw new Error("시도교육청코드 인자 값이 필요합니다.");

		const { data } = await this.api.get("/schoolMajorinfo", { params: { ...config, ...args } });
		const majorInfo: IMajorInfoResponse = data.schoolMajorinfo;

		if (majorInfo) {
			return majorInfo[1].row;
		} else {
			throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
		}
	}

	public async getAflcoInfo(args: IAflcoInfoRequest, config?: IConfig): Promise<IAflcoInfoRow[]> {
		if (!args.ATPT_OFCDC_SC_CODE) throw new Error("시도교육청코드 인자 값이 필요합니다.");

		const { data } = await this.api.get("/schulAflcoinfo", { params: { ...config, ...args } });
		const aflocoInfo: IAflcoInfoResponse = data.schulAflcoinfo;

		if (aflocoInfo) {
			return aflocoInfo[1].row;
		} else {
			throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
		}
	}

	public async getTimeClassroomInfo(args: ITimeClassroomInfoRequest, config?: IConfig): Promise<ITimeClassroomInfoRow[]> {
		if (!args.ATPT_OFCDC_SC_CODE || !args.SD_SCHUL_CODE) throw new Error("시도교육청코드, 표준학교코드 인자 값이 필요합니다.");

		const { data } = await this.api.get("/tiClrminfo", { params: { ...config, ...args } });
		const timeClassroomInfo: ITimeClassroomInfoResponse = data.tiClrminfo;

		if (timeClassroomInfo) {
			return timeClassroomInfo[1].row;
		} else {
			throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
		}
	}

	public async getSchedule(args: IScheduleRequest, config?: IConfig): Promise<IScheduleRow[]> {
		if (!args.ATPT_OFCDC_SC_CODE || !args.SD_SCHUL_CODE) throw new Error("시도교육청코드, 표준학교코드 인자 값이 필요합니다.");

		const { data } = await this.api.get("/SchoolSchedule", { params: { ...config, ...args } });
		const schedule: IScheduleResponse = data.SchoolSchedule;

		if (schedule) {
			return schedule[1].row;
		} else {
			throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
		}
	}

	public async getTimetable(schoolData: ISchoolInfoRequest, args: ITimetableRequest, config?: IConfig): Promise<ITimetableRow[]> {
		const schoolInfo = await this.getSchoolInfo(schoolData, config);
		const school = schoolInfo[0];
		if (schoolInfo.length > 1) throw new Error("검색된 학교가 많습니다. 자세한 정보를 입력해주세요.");

		const schoolType: { [index: string]: string } = { ["초등학교"]: "elsTimetable", ["중학교"]: "misTimetable", ["고등학교"]: "hisTimetable", ["특수학교"]: "spsTimetable" };
		const { data } = await this.api.get(`/${schoolType[school.SCHUL_KND_SC_NM]}`, { params: { ...config, ...args, ATPT_OFCDC_SC_CODE: school.ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school.SD_SCHUL_CODE } });
		const timetable: ITimeTableResponse = data[schoolType[school.SCHUL_KND_SC_NM]];

		if (timetable) {
			return timetable[1].row;
		} else {
			throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
		}
	}
}

export default Neis;
