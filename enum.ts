export const Semester = {
    FIRST: '1학기',
    SUMMER: '여름학기',
    SECOND: '2학기',
    WINTER: '겨울학기',
} as const;

type SemesterKey = keyof typeof Semester;
export const SemesterKeys = Object.keys(Semester) as SemesterKey[];

export const GradeScaleValue = {
    SCORE: "점수 100기준 입력",
    PF: "Pass/Fail 입력",
    UNKNOWN: "(알수없음)"
} as const;

type GradeScaleKey = keyof typeof GradeScaleValue;
export const GradeScaleKeys = Object.keys(GradeScaleValue) as GradeScaleKey[];


export const GradeRuleValue = {
    RELATIVE: "상대평가",
    ABSOLUTE: "절대평가",
    UNKNOWN: "(알수없음)"
} as const;

type GradeRuleKey = keyof typeof GradeRuleValue;
export const GradeRuleKeys = Object.keys(GradeRuleValue) as GradeScaleKey[];


export const LanguageValue = {
    KOREAN: "한국어",
    ENGLISH: "영어",
    MIXED_ENGLISH_KOREAN: "영어-한국어혼합",
    NATION: "원어",
    MIXED_NATION_KOREAN: "원어-한국어혼합",
    UNKNOWN: "(알수없음)"
} as const;

type LanguageKey = keyof typeof LanguageValue;
export const LanguageKeys = Object.keys(LanguageValue) as GradeScaleKey[];

export const SubjectProcessValue = {
    HAKSA: "학사과정",
    SUKSA: "석사과정",
    SUKBAK: "석박과정",
    UNKNOWN: "(알수없음)"
} as const;

type SubjectProcessKey = keyof typeof SubjectProcessValue;
export const SubjectProcessKeys = Object.keys(SubjectProcessValue) as GradeScaleKey[];

export type {SemesterKey, GradeScaleKey, GradeRuleKey, LanguageKey, SubjectProcessKey};
