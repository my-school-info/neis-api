"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Neis {
    constructor({ KEY, Type }) {
        this.key = KEY;
        this.api = axios_1.default.create({ baseURL: "https://open.neis.go.kr/hub", params: { KEY, Type } });
    }
    getSchoolInfo(args, config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(args).length <= 0)
                throw new Error("최소 1개 이상의 신청인자가 필요합니다.");
            const { data } = yield this.api.get("/schoolInfo", { params: Object.assign(Object.assign({}, config), args) });
            const schoolInfo = data.schoolInfo;
            if (schoolInfo) {
                return schoolInfo[1].row;
            }
            else {
                throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
            }
        });
    }
    getMealInfo(args, config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args.ATPT_OFCDC_SC_CODE || !args.SD_SCHUL_CODE)
                throw new Error("시도교육청코드, 표준학교코드 인자 값이 필요합니다.");
            const { data } = yield this.api.get("/mealServiceDietInfo", { params: Object.assign(Object.assign({}, config), args) });
            const mealInfo = data.mealServiceDietInfo;
            if (mealInfo) {
                return mealInfo[1].row;
            }
            else {
                throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
            }
        });
    }
    getClassInfo(args, config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args.ATPT_OFCDC_SC_CODE || !args.SD_SCHUL_CODE)
                throw new Error("시도교육청코드, 표준학교코드 인자 값이 필요합니다.");
            const { data } = yield this.api.get("/classInfo", { params: Object.assign(Object.assign({}, config), args) });
            const classInfo = data.classInfo;
            if (classInfo) {
                return classInfo[1].row;
            }
            else {
                throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
            }
        });
    }
    getMajorInfo(args, config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args.ATPT_OFCDC_SC_CODE)
                throw new Error("시도교육청코드 인자 값이 필요합니다.");
            const { data } = yield this.api.get("/schoolMajorinfo", { params: Object.assign(Object.assign({}, config), args) });
            const majorInfo = data.schoolMajorinfo;
            if (majorInfo) {
                return majorInfo[1].row;
            }
            else {
                throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
            }
        });
    }
    getAflcoInfo(args, config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args.ATPT_OFCDC_SC_CODE)
                throw new Error("시도교육청코드 인자 값이 필요합니다.");
            const { data } = yield this.api.get("/schulAflcoinfo", { params: Object.assign(Object.assign({}, config), args) });
            const aflocoInfo = data.schulAflcoinfo;
            if (aflocoInfo) {
                return aflocoInfo[1].row;
            }
            else {
                throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
            }
        });
    }
    getTimeClassroomInfo(args, config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args.ATPT_OFCDC_SC_CODE || !args.SD_SCHUL_CODE)
                throw new Error("시도교육청코드, 표준학교코드 인자 값이 필요합니다.");
            const { data } = yield this.api.get("/tiClrminfo", { params: Object.assign(Object.assign({}, config), args) });
            const timeClassroomInfo = data.tiClrminfo;
            if (timeClassroomInfo) {
                return timeClassroomInfo[1].row;
            }
            else {
                throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
            }
        });
    }
    getSchedule(args, config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!args.ATPT_OFCDC_SC_CODE || !args.SD_SCHUL_CODE)
                throw new Error("시도교육청코드, 표준학교코드 인자 값이 필요합니다.");
            const { data } = yield this.api.get("/SchoolSchedule", { params: Object.assign(Object.assign({}, config), args) });
            const schedule = data.SchoolSchedule;
            if (schedule) {
                return schedule[1].row;
            }
            else {
                throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
            }
        });
    }
    getTimetable(schoolData, args, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const schoolInfo = yield this.getSchoolInfo(schoolData, config);
            const school = schoolInfo[0];
            if (schoolInfo.length > 1)
                throw new Error("검색된 학교가 많습니다. 자세한 정보를 입력해주세요.");
            const schoolType = { ["초등학교"]: "elsTimetable", ["중학교"]: "misTimetable", ["고등학교"]: "hisTimetable", ["특수학교"]: "spsTimetable" };
            const { data } = yield this.api.get(`/${schoolType[school.SCHUL_KND_SC_NM]}`, { params: Object.assign(Object.assign(Object.assign({}, config), args), { ATPT_OFCDC_SC_CODE: school.ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school.SD_SCHUL_CODE }) });
            const timetable = data[schoolType[school.SCHUL_KND_SC_NM]];
            if (timetable) {
                return timetable[1].row;
            }
            else {
                throw new Error(data.RESULT.CODE + " " + data.RESULT.MESSAGE);
            }
        });
    }
}
exports.default = Neis;
