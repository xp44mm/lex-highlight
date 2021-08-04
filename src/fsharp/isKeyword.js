﻿const rgxKeywords = [
    /^abstract$/,
    /^and$/,
    /^as$/,
    /^assert$/,
    /^base$/,
    /^begin$/,
    /^class$/,
    /^default$/,
    /^delegate$/,
    /^do$/,
    /^done$/,
    /^downcast$/,
    /^downto$/,
    /^elif$/,
    /^else$/,
    /^end$/,
    /^exception$/,
    /^extern$/,
    /^false$/,
    /^finally$/,
    /^fixed$/,
    /^for$/,
    /^fun$/,
    /^function$/,
    /^global$/,
    /^if$/,
    /^in$/,
    /^inherit$/,
    /^inline$/,
    /^interface$/,
    /^internal$/,
    /^lazy$/,
    /^let$/,
    /^match$/,
    /^member$/,
    /^module$/,
    /^mutable$/,
    /^namespace$/,
    /^new$/,
    /^not$/,
    /^null$/,
    /^of$/,
    /^open$/,
    /^or$/,
    /^override$/,
    /^private$/,
    /^public$/,
    /^rec$/,
    /^return$/,
    /^select$/,
    /^static$/,
    /^struct$/,
    /^then$/,
    /^to$/,
    /^true$/,
    /^try$/,
    /^type$/,
    /^upcast$/,
    /^use$/,
    /^val$/,
    /^void$/,
    /^when$/,
    /^while$/,
    /^with$/,
    /^yield$/,
    /^const$/,
    /^__LINE__$/,
    /^__SOURCE_DIRECTORY__$/,
    /^__SOURCE_FILE__$/,

]

export const isKeyword = (input = "") => {
    return rgxKeywords.some(rgx => rgx.test(input))
}
