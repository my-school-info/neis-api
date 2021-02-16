interface IResponseHead {
	head: [{ list_total_count: number }, { RESULT: { CODE: string; MESSAGE: string } }];
}

interface ISchoolInfoRow {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 시도교육청명
	 */
	ATPT_OFCDC_SC_NM?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학교명
	 */
	SCHUL_NM?: string;
	/**
	 * 영문학교명
	 */
	ENG_SCHUL_NM?: string;
	/**
	 * 학교종류명
	 */
	SCHUL_KND_SC_NM: string;
	/**
	 * 소재지명
	 */
	LCTN_SC_NM?: string;
	/**
	 * 관할조직명
	 */
	JU_ORG_NM?: string;
	/**
	 * 설립명
	 */
	FOND_SC_NM?: string;
	/**
	 * 도로명우편번호
	 */
	ORG_RDNZC?: string;
	/**
	 * 도로명주소
	 */
	ORG_RDNMA?: string;
	/**
	 * 도로명상세주소
	 */
	ORG_RDNDA?: string;
	/**
	 * 전화번호
	 */
	ORG_TELNO?: string;
	/**
	 * 홈페이지주소
	 */
	HMPG_ADRES?: string;
	/**
	 * 남녀공학구분명
	 */
	COEDU_SC_NM?: string;
	/**
	 * 팩스번호
	 */
	ORG_FAXNO?: string;
	/**
	 * 고등학교구분명
	 */
	HS_SC_NM?: string;
	/**
	 * 산업체특별학급존재여부
	 */
	INDST_SPECL_CCCCL_EXST_YN?: string;
	/**
	 * 고등학교일반실업구분명
	 */
	HS_GNRL_BUSNS_SC_NM?: string;
	/**
	 * 특수목적고등학교계열명
	 */
	SPCLY_PURPS_HS_ORD_NM?: string;
	/**
	 * 입시전후기구분명
	 */
	ENE_BFE_SEHF_SC_NM?: string;
	/**
	 * 주야구분명
	 */
	DGHT_SC_NM?: string;
	/**
	 * 설립일자
	 */
	FOND_YMD?: string;
	/**
	 * 개교기념일
	 */
	FOAS_MEMRD?: string;
	/**
	 * 적재일시
	 */
	LOAD_DTM?: string;
}

interface ISchoolInfoResponse {
	[0]: IResponseHead;
	[1]: { row: Array<ISchoolInfoRow> };
}

interface IMealInfoRow {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 시도교육청명
	 */
	ATPT_OFCDC_SC_NM?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학교명
	 */
	SCHUL_NM?: string;
	/**
	 * 식사코드
	 */
	MMEAL_SC_CODE?: string;
	/**
	 * 식사명
	 */
	MMEAL_SC_NM?: string;
	/**
	 * 급식일자
	 */
	MLSV_YMD?: string;
	/**
	 * 급식인원수
	 */
	MLSV_FGR?: string;
	/**
	 * 요리명
	 */
	DDISH_NM?: string;
	/**
	 * 원산지정보
	 */
	ORPLC_INFO?: string;
	/**
	 * 칼로리정보
	 */
	CAL_INFO?: string;
	/**
	 * 영양정보
	 */
	NTR_INFO?: string;
	/**
	 * 급식시작일자
	 */
	MLSV_FROM_YMD?: string;
	/**
	 * 급식종료일자
	 */
	MLSV_TO_YMD?: string;
}

interface IMealInfoResponse {
	[0]: IResponseHead;
	[1]: { row: Array<IMealInfoRow> };
}

interface IClassInfoRow {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 시도교육청명
	 */
	ATPT_OFCDC_SC_NM?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학교명
	 */
	SCHUL_NM?: string;
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
	/**
	 * 반명
	 */
	CLASS_NM?: string;
	/**
	 * 적재일시
	 */
	LOAD_DTM?: string;
}

interface IClassInfoResponse {
	[0]: IResponseHead;
	[1]: { row: Array<IClassInfoRow> };
}

interface IMajorInfoRow {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 시도교육청명
	 */
	ATPT_OFCDC_SC_NM?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학교명
	 */
	SCHUL_NM?: string;
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
	/**
	 * 적재일시
	 */
	LOAD_DTM?: string;
}

interface IMajorInfoResponse {
	[0]: IResponseHead;
	[1]: { row: Array<IMajorInfoRow> };
}

interface IAflcoInfoRow {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 시도교육청명
	 */
	ATPT_OFCDC_SC_NM?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학교명
	 */
	SCHUL_NM?: string;
	/**
	 * 주야과정명
	 */
	DGHT_CRSE_SC_NM?: string;
	/**
	 * 계열명
	 */
	ORD_SC_NM?: string;
	/**
	 * 적재일시
	 */
	LOAD_DTM?: string;
}

interface IAflcoInfoResponse {
	[0]: IResponseHead;
	[1]: { row: Array<IAflcoInfoRow> };
}

interface ITimeClassroomInfoRow {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 시도교육청명
	 */
	ATPT_OFCDC_SC_NM?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학교명
	 */
	SCHUL_NM?: string;
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
	/**
	 * 강의실명
	 */
	CLRM_NM?: string;
	/**
	 * 적재일시
	 */
	LOAD_DTM?: string;
}

interface ITimeClassroomInfoResponse {
	[0]: IResponseHead;
	[1]: { row: Array<ITimeClassroomInfoRow> };
}

interface IScheduleRow {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 시도교육청명
	 */
	ATPT_OFCDC_SC_NM?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학교명
	 */
	SCHUL_NM?: string;
	/**
	 * 학년도
	 */
	AY?: string;
	/**
	 * 주야과정명
	 */
	DGHT_CRSE_SC_NM?: string;
	/**
	 * 학교과정명
	 */
	SCHUL_CRSE_SC_NM?: string;
	/**
	 * 수업공제일명
	 */
	SBTR_DD_SC_NM?: string;
	/**
	 * 학사일자
	 */
	AA_YMD?: string;
	/**
	 * 행사명
	 */
	EVENT_NM?: string;
	/**
	 * 행사내용
	 */
	EVENT_CNTNT?: string;
	/**
	 * 1학년행사여부
	 */
	ONE_GRADE_EVENT_YN?: string;
	/**
	 * 2학년행사여부
	 */
	TW_GRADE_EVENT_YN?: string;
	/**
	 * 3학년행사여부
	 */
	THREE_GRADE_EVENT_YN?: string;
	/**
	 * 4학년행사여부
	 */
	FR_GRADE_EVENT_YN?: string;
	/**
	 * 5학년행사여부
	 */
	FIV_GRADE_EVENT_YN?: string;
	/**
	 * 6학년행사여부
	 */
	SIX_GRADE_EVENT_YN?: string;
	/**
	 * 적재일시
	 */
	LOAD_DTM?: string;
}

interface IScheduleResponse {
	[0]: IResponseHead;
	[1]: { row: Array<IScheduleRow> };
}

interface ITimetableRow {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 시도교육청명
	 */
	ATPT_OFCDC_SC_NM?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학교명
	 */
	SCHUL_NM?: string;
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
	 * 수업내용
	 */
	ITRT_CNTNT?: string;
	/**
	 * 적재일시
	 */
	LOAD_DTM?: string;
}

interface ITimeTableResponse {
	[0]: IResponseHead;
	[1]: { row: Array<ITimetableRow> };
}

interface ISpecialTimetableRow {
	/**
	 * 시도교육청코드
	 */
	ATPT_OFCDC_SC_CODE?: string;
	/**
	 * 시도교육청명
	 */
	ATPT_OFCDC_SC_NM?: string;
	/**
	 * 표준학교코드
	 */
	SD_SCHUL_CODE?: string;
	/**
	 * 학교명
	 */
	SCHUL_NM?: string;
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
	 * 수업내용
	 */
	ITRT_CNTNT?: string;
	/**
	 * 적재일시
	 */
	LOAD_DTM?: string;
}

interface ISpecialTimeTableResponse {
	[0]: IResponseHead;
	[1]: { row: Array<ISpecialTimetableRow> };
}

export { ISchoolInfoRow, IMealInfoRow, IClassInfoRow, IMajorInfoRow, IAflcoInfoRow, ITimeClassroomInfoRow, IScheduleRow, ITimetableRow, ISpecialTimetableRow };

export { IResponseHead, ISchoolInfoResponse, IMealInfoResponse, IClassInfoResponse, IMajorInfoResponse, IAflcoInfoResponse, ITimeClassroomInfoResponse, IScheduleResponse, ITimeTableResponse, ISpecialTimeTableResponse };
