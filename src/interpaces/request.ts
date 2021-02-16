interface ISchoolInfoRequest {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학교명
	 */
	SCHUL_NM?: string;
	/**
	 * 학교종류명
	 */
	SCHUL_KND_SC_NM?: string;
	/**
	 * 소재지명
	 */
	LCTN_SC_NM?: string;
	/**
	 * 설립명
	 */
	FOND_SC_NM?: string;
}

interface IMealInfoRequest {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 식사코드
	 */
	MMEAL_SC_CODE?: string;
	/**
	 * 급식일자
	 */
	MLSV_YMD?: string;
	/**
	 * 급식시작일자
	 */
	MLSV_FROM_YMD?: string;
	/**
	 * 급식종료일자
	 */
	MLSV_TO_YMD?: string;
}

interface IClassInfoRequest {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학년도
	 */
	AY?: string;
	/**
	 * 학년
	 */
	GRADE?: string;
	/**
	 * 주야과정명
	 */
	DGHT_CRSE_SC_NM?: string;
	/**
	 * 학교과정명
	 */
	SCHUL_CRSE_SC_NM?: string;
	/**
	 * 계열명
	 */
	ORD_SC_NM?: string;
	/**
	 * 학과명
	 */
	DDDEP_NM?: string;
}

interface IMajorInfoRequest {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 주야과정명
	 */
	DGHT_CRSE_SC_NM?: string;
	/**
	 * 계열명
	 */
	ORD_SC_NM?: string;
}

interface IAflcoInfoRequest {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 주야과정명
	 */
	DGHT_CRSE_SC_NM?: string;
}

interface ITimeClassroomInfoRequest {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학년도
	 */
	AY?: string;
	/**
	 * 학년
	 */
	GRADE?: string;
	/**
	 * 학기
	 */
	SEM?: string;
	/**
	 * 학교과정명
	 */
	SCHUL_CRSE_SC_NM?: string;
	/**
	 * 주야과정명
	 */
	DGHT_CRSE_SC_NM?: string;
	/**
	 * 계열명
	 */
	ORD_SC_NM?: string;
	/**
	 * 학과명
	 */
	DDDEP_NM?: string;
}

interface IScheduleRequest {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 주야과정명
	 */
	DGHT_CRSE_SC_NM?: string;
	/**
	 * 학교과정명
	 */
	SCHUL_CRSE_SC_NM?: string;
	/**
	 * 학사일자
	 */
	AA_YMD?: string;
	/**
	 * 학사시작일자
	 */
	AA_FROM_YMD?: string;
	/**
	 * 학사종료일자
	 */
	AA_TO_YMD?: string;
}

interface ITimetableRequest {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학년도
	 */
	AY?: string;
	/**
	 * 학기
	 */
	SEM?: string;
	/**
	 * 시간표일자
	 */
	ALL_TI_YMD?: string;
	/**
	 * 주야과정명
	 */
	DGHT_CRSE_SC_NM?: string;
	/**
	 * 학년
	 */
	GRADE?: string;
	/**
	 * 반명
	 */
	CLASS_NM?: string;
	/**
	 * 교시
	 */
	PERIO?: string;
	/**
	 * 시간표시작일자
	 */
	TI_FROM_YMD?: string;
	/**
	 * 시간표종료일자
	 */
	TI_TO_YMD?: string;
}

interface ISpecialTimetableRequest {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학년도
	 */
	AY?: string;
	/**
	 * 학기
	 */
	SEM?: string;
	/**
	 * 시간표일자
	 */
	ALL_TI_YMD?: string;
	/**
	 * 학교과정명
	 */
	SCHUL_CRSE_SC_NM?: string;
	/**
	 * 학년
	 */
	GRADE?: string;
	/**
	 * 강의실명
	 */
	CLRM_NM?: string;
	/**
	 * 반명
	 */
	CLASS_NM?: string;
	/**
	 * 교시
	 */
	PERIO?: string;
	/**
	 * 시간표시작일자
	 */
	TI_FROM_YMD?: string;
	/**
	 * 시간표종료일자
	 */
	TI_TO_YMD?: string;
}

export { ISchoolInfoRequest, IMealInfoRequest, IClassInfoRequest, IMajorInfoRequest, IAflcoInfoRequest, ITimeClassroomInfoRequest, IScheduleRequest, ITimetableRequest, ISpecialTimetableRequest };
