import Neis from "../neis";

const neis = new Neis({ KEY: "", Type: "json" });

/* 학교기본정보 조회 */
async function getSchoolInfo() {
	const schoolInfo = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
	console.log(schoolInfo);

	/*
    [
        {
            ATPT_OFCDC_SC_CODE: 'B10',
            ATPT_OFCDC_SC_NM: '서울특별시교육청',
            SD_SCHUL_CODE: '7010911',
            SCHUL_NM: '한세사이버보안고등학교',
            ENG_SCHUL_NM: 'Hansei Cyber Security High School',
            SCHUL_KND_SC_NM: '고등학교',
            LCTN_SC_NM: '서울특별시',
            JU_ORG_NM: '서울특별시교육청',
            FOND_SC_NM: '사립',
            ORG_RDNZC: '04129 ',
            ORG_RDNMA: '서울특별시 마포구 마포대로11길 44-80',
            ORG_RDNDA: '(아현동)',
            ORG_TELNO: '02-362-0130',
            HMPG_ADRES: 'http://www.hansei.org',
            COEDU_SC_NM: '남여공학',
            ORG_FAXNO: '02-312-3996',
            HS_SC_NM: '특성화고',
            INDST_SPECL_CCCCL_EXST_YN: 'N',
            HS_GNRL_BUSNS_SC_NM: '전문계',
            SPCLY_PURPS_HS_ORD_NM: null,
            ENE_BFE_SEHF_SC_NM: '전기',
            DGHT_SC_NM: '주간',
            FOND_YMD: '19941005',
            FOAS_MEMRD: '19941005',
            LOAD_DTM: '20201210104203'
        }
    ]
    */
}

/* 급식식단정보 조회 */

async function getMealInfo() {
	const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
	const mealInfo = await neis.getMealInfo({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE, MLSV_FROM_YMD: "20210115" });

	console.log(mealInfo);

	/*
    [
        {
            ATPT_OFCDC_SC_CODE: 'B10',
            ATPT_OFCDC_SC_NM: '서울특별시교육청',
            SD_SCHUL_CODE: '7010911',
            SCHUL_NM: '한세사이버보안고등학교',
            MMEAL_SC_CODE: '2',
            MMEAL_SC_NM: '중식',
            MLSV_YMD: '20210115',
            MLSV_FGR: '39',
            DDISH_NM: '나물비빔밥/약고추장1.5.6.16.<br/>청국장찌개5.6.9.13.<br/>수제간장치킨13.15.<br/>포기김치9.13.<br/>딸기',
            ORPLC_INFO: '쌀 : 국내산<br/>김치류 : 국내산<br/>고춧가루(김치류) : 국내산<br/>쇠고기(종류) : 국내산(한우)<br/>돼지고기 : 국내산<br/>닭고기 : 국내산<br/>오리고기 : 국내산<br/>쇠고기 식육가공품 : 국내산<br/>돼지고기 식육가공품 : 국내산<br/>닭고기 식육가공품 : 국내산<br/>오리 
        고기 가공품 : 국내산<br/>낙지 : 국내산<br/>고등어 : 국내산<br/>갈치 : 국내산<br/>오징어 : 국내산<br/>꽃게 : 국내산<br/>참조기 : 국내산<br/>콩 : 국내산',
            CAL_INFO: '650.8 Kcal',
            NTR_INFO: '탄수화물(g) : 100.4<br/>단백질(g) : 48.5<br/>지방(g) : 11.6<br/>비타민A(R.E) : 563.1<br/>티아민(mg) : 0.6<br/>리보플라빈(mg) : 0.9<br/>비타민C(mg) : 69.2<br/>칼슘(mg) : 310.1<br/>철분(mg) : 7.6',
            MLSV_FROM_YMD: '20210115',
            MLSV_TO_YMD: '20210115'
        }
    ]
    */
}

/* 반정보 조회 */

async function getClassInfo() {
	const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
	const classInfo = await neis.getClassInfo({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE, AY: "2021" });

	console.log(classInfo);

	/*
    [
        {
            ATPT_OFCDC_SC_CODE: 'B10',
            ATPT_OFCDC_SC_NM: '서울특별시교육청',
            SD_SCHUL_CODE: '7010911',
            SCHUL_NM: '한세사이버보안고등학교',
            AY: '2021',
            GRADE: '1',
            DGHT_CRSE_SC_NM: '주간',
            SCHUL_CRSE_SC_NM: '고등학교',
            ORD_SC_NM: '공업계',
            DDDEP_NM: '해킹보안과정',
            CLASS_NM: '1',
            LOAD_DTM: '20210201003115'
        },
        ...
    ]
    */
}

/* 학교학과정보 조회 */

async function getMajorInfo() {
	const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
	const majorInfo = await neis.getMajorInfo({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE });

	console.log(majorInfo);

	/*
    [
        {
            ATPT_OFCDC_SC_CODE: 'B10',
            ATPT_OFCDC_SC_NM: '서울특별시교육청',
            SD_SCHUL_CODE: '7010911',
            SCHUL_NM: '한세사이버보안고등학교',
            DGHT_CRSE_SC_NM: '주간',
            ORD_SC_NM: '공업계',
            DDDEP_NM: '해킹보안과정',
            LOAD_DTM: '20210201005009'
        }
    ]
    */
}

/* 학교계열정보 조회 */

async function getAflcoInfo() {
	const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
	const aflcoInfo = await neis.getAflcoInfo({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE });

	console.log(aflcoInfo);

	/*
    [
        {
            ATPT_OFCDC_SC_CODE: 'B10',
            ATPT_OFCDC_SC_NM: '서울특별시교육청',
            SD_SCHUL_CODE: '7010911',
            SCHUL_NM: '한세사이버보안고등학교',
            DGHT_CRSE_SC_NM: '야간',
            ORD_SC_NM: '공업계',
            LOAD_DTM: '20210201004009'
        },
        {
            ATPT_OFCDC_SC_CODE: 'B10',
            ATPT_OFCDC_SC_NM: '서울특별시교육청',
            SD_SCHUL_CODE: '7010911',
            SCHUL_NM: '한세사이버보안고등학교',
            DGHT_CRSE_SC_NM: '주간',
            ORD_SC_NM: '공업계',
            LOAD_DTM: '20210201004009'
        }
    ]
    */
}

/* 시간표강의실정보 조회 */

async function getTimeClasssroomInfo() {
	const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
	const timeClassroomInfo = await neis.getTimeClassroomInfo({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE, AY: "2020" });

	console.log(timeClassroomInfo);

	/*
    [
        {
            ATPT_OFCDC_SC_CODE: 'B10',
            ATPT_OFCDC_SC_NM: '서울특별시교육청',
            SD_SCHUL_CODE: '7010911',
            SCHUL_NM: '한세사이버보안고등학교',
            AY: '2020',
            GRADE: '1',
            SEM: '1',
            SCHUL_CRSE_SC_NM: '고등학교',
            DGHT_CRSE_SC_NM: '주간',
            ORD_SC_NM: '공업계',
            DDDEP_NM: '게임과',
            CLRM_NM: '1',
            LOAD_DTM: '20210214054224'
        },

        ...
    ]
    */
}

/* 학교학사일정 조회 */

async function getSchedule() {
	const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
	const schedule = await neis.getSchedule({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE, AA_FROM_YMD: "20210101" });

	console.log(schedule);

	/*
    [
        {
            ATPT_OFCDC_SC_CODE: 'B10',
            ATPT_OFCDC_SC_NM: '서울특별시교육청',
            SD_SCHUL_CODE: '7010911',
            SCHUL_NM: '한세사이버보안고등학교',
            AY: '2020',
            DGHT_CRSE_SC_NM: '주간',
            SCHUL_CRSE_SC_NM: '고등학교',
            SBTR_DD_SC_NM: '휴업일',
            AA_YMD: '20210227',
            EVENT_NM: '토요휴업일',
            EVENT_CNTNT: null,
            ONE_GRADE_EVENT_YN: 'Y',
            TW_GRADE_EVENT_YN: 'Y',
            THREE_GRADE_EVENT_YN: 'Y',
            FR_GRADE_EVENT_YN: '*',
            FIV_GRADE_EVENT_YN: '*',
            SIX_GRADE_EVENT_YN: '*',
            LOAD_DTM: '20210215004607'
        }
    ]
    */
}

/* 학교시간표 조회 */

async function getTimetable() {
	const school = await neis.getSchoolInfo({ SCHUL_NM: "한세사이버보안고등학교" });
	const timetable = await neis.getTimetable({ ATPT_OFCDC_SC_CODE: school[0].ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE: school[0].SD_SCHUL_CODE }, { AY: "2020", SEM: "2" });

	console.log(timetable);
	/*
    [
        {
            ATPT_OFCDC_SC_CODE: 'B10',
            ATPT_OFCDC_SC_NM: '서울특별시교육청',
            SD_SCHUL_CODE: '7010911',
            SCHUL_NM: '한세사이버보안고등학교',
            AY: '2020',
            SEM: '2',
            ALL_TI_YMD: '20200902',
            DGHT_CRSE_SC_NM: '주간',
            ORD_SC_NM: '공업계',
            DDDEP_NM: '정보보안과정',
            GRADE: '1',
            CLRM_NM: '2',
            CLASS_NM: '2',
            PERIO: '5',
            ITRT_CNTNT: '통합사회',
            LOAD_DTM: '20200906042101'
        }
    ]
    */
}
