/**
 * @param {string} s
 * @return {number}
 * Notes:
 * a substring length is current_index - start_index + 1, so the important point is getting the right start_index;
 * a new start_index is the coming repeated letter's current index in the current substring turn plus 1.
 * If the coming letter repeats in previous substring turn, ignore the repeating with updating it with new index.
 */
//Runtime: 88 ms, faster than 99.07% of JavaScript online submissions for Longest Substring Without Repeating Characters.
function lengthOfLongestSubstring (s) {
    let dict = new Map();
    let index = 0;
    let start = 0;
    let result = 0;
    if (!s || s.length === 0) {
        return 0;
    }
    while (index < s.length) {
        if (dict.has(s[index])) {
            //The situation when "start" is bigger is that the new letter shows up before, but is in an older substring round. 
            //Then this letter doesn't affect this round substring calc.
            start = Math.max(dict.get(s[index]) + 1, start);
        }
        dict.set(s[index], index);
        //a substring length is current_index - start_index + 1
        result = Math.max(result, index-start+1);
        index++;
    }

    return result;
}
console.log(lengthOfLongestSubstring("tmmzuxt"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));