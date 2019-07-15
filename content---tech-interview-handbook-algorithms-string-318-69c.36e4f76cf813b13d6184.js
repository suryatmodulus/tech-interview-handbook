(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return l}),a.d(t,"rightToc",function(){return o}),a.d(t,"default",function(){return b});a(0);var n=a(117);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l={id:"string",title:"String"},o=[{value:"Tips",id:"tips",children:[]},{value:"Strings are sequences",id:"strings-are-sequences",children:[]},{value:"Common question topics",id:"common-question-topics",children:[{value:"Non-repeating Characters",id:"non-repeating-characters",children:[]},{value:"Anagram",id:"anagram",children:[]},{value:"Palindrome",id:"palindrome",children:[]}]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended Leetcode questions",id:"recommended-leetcode-questions",children:[]},{value:"More questions",id:"more-questions",children:[]}],s={rightToc:o},c="wrapper";function b(e){var t=e.components,a=r(e,["components"]);return Object(n.b)(c,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"tips"})),Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#tips"}),"#"),"Tips"),Object(n.b)("p",null,"Ask about input character set and case sensitivity. Usually the characters are limited to lowercase Latin characters, for example a to z."),Object(n.b)("p",null,"When you need to compare strings where the order isn’t important (like anagram), you may consider using a HashMap as a counter. If your language has a built-in Counter class like Python, ask to use that instead."),Object(n.b)("p",null,"If you need to keep a counter of characters, a common mistake is to say that the space complexity required for the counter is O(n). The space required for a counter is O(1) not O(n). This is because the upper bound is the range of characters, which is usually a fixed constant of 26. The input set is just lowercase Latin characters."),Object(n.b)("p",null,"Common data structures for looking up strings efficiently are"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Trie"}),"Trie/Prefix Tree")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Suffix_tree"}),"Suffix Tree"))),Object(n.b)("p",null,"Common string algorithms are"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm"}),"Rabin Karp")," for efficient searching of substring using a rolling hash"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm"}),"KMP")," for efficient searching of substring")),Object(n.b)("h2",null,Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"strings-are-sequences"})),Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#strings-are-sequences"}),"#"),"Strings are sequences"),Object(n.b)("p",null,"A string is a sequence of characters. Many tips that apply to arrays also apply to strings."),Object(n.b)("p",null,"Are there duplicate characters in the string, would it affect the answer?"),Object(n.b)("p",null,"When using an index to iterate through characters, be careful not to go out of bounds."),Object(n.b)("p",null,"Be mindful about slicing or concatenating strings in your code. Typically, slicing and concatenating strings require O(n) time. Use start and end indices to demarcate a substring where possible."),Object(n.b)("p",null,"Sometimes you can traverse the string from the right rather than from the left."),Object(n.b)("p",null,"Master the ",Object(n.b)("a",i({parentName:"p"},{href:"https://discuss.leetcode.com/topic/30941/here-is-a-10-line-template-that-can-solve-most-substring-problems"}),"sliding window technique")," that applies to many substring problems."),Object(n.b)("p",null,"When you are given two strings to process, it is common to have one index per string (pointer) to traverse/compare the both of them. For example, we use the same approach to merge two sorted arrays."),Object(n.b)("h2",null,Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"common-question-topics"})),Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#common-question-topics"}),"#"),"Common question topics"),Object(n.b)("p",null,"Many string questions fall into one of these buckets."),Object(n.b)("h3",null,Object(n.b)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"non-repeating-characters"})),Object(n.b)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#non-repeating-characters"}),"#"),"Non-repeating Characters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Use a 26-bit bitmask to indicate which lower case latin characters are inside the string.")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-py"}),"mask = 0\nfor c in set(word):\n  mask |= (1 << (ord(c) - ord('a')))\n")),Object(n.b)("p",null,"To determine if two strings have common characters, perform & on the two bitmasks. If the result is non-zero, ",Object(n.b)("inlineCode",{parentName:"p"},"mask_a & mask_b > 0"),", then the two strings have common characters."),Object(n.b)("h3",null,Object(n.b)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"anagram"})),Object(n.b)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#anagram"}),"#"),"Anagram"),Object(n.b)("p",null,"An anagram is word switch or word play. It is the result of re-arranging the letters of a word or phrase to produce a new word or phrase, while using all the original letters only once. In interviews, usually we are only bothered with words without spaces in them."),Object(n.b)("p",null,"To determine if two strings are anagrams, there are a few plausible approaches:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Sorting both strings should produce the same resulting string. This takes O(nlgn) time and O(lgn) space."),Object(n.b)("li",{parentName:"ul"},"If we map each character to a prime number and we multiply each mapped number together, anagrams should have the same multiple (prime factor decomposition). This takes O(n) time and O(1) space."),Object(n.b)("li",{parentName:"ul"},"Frequency counting of characters will help to determine if two strings are anagrams. This also takes O(n) time and O(1) space.")),Object(n.b)("h3",null,Object(n.b)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"palindrome"})),Object(n.b)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#palindrome"}),"#"),"Palindrome"),Object(n.b)("p",null,"A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, such as ",Object(n.b)("em",{parentName:"p"},"madam")," or ",Object(n.b)("em",{parentName:"p"},"racecar"),"."),Object(n.b)("p",null,"Here are ways to determine if a string is a palindrome:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Reverse the string and it should be equal to itself."),Object(n.b)("li",{parentName:"ul"},"Have two pointers at the start and end of the string. Move the pointers inward till they meet. At any point in time, the characters at both pointers should match.")),Object(n.b)("p",null,"The order of characters within the string matters, so HashMaps are usually not helpful."),Object(n.b)("p",null,"When a question is about counting the number of palindromes, a common trick is to have two pointers that move outward, away from the middle. Note that palindromes can be even or odd length. For each middle pivot position, you need to check it twice: Once that includes the character and once without the character."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"For substrings, you can terminate early once there is no match."),Object(n.b)("li",{parentName:"ul"},"For subsequences, use dynamic programming as there are overlapping subproblems. Check out ",Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/longest-palindromic-subsequence/"}),"this question"),".")),Object(n.b)("h2",null,Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"corner-cases"})),Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#corner-cases"}),"#"),"Corner cases"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Empty string"),Object(n.b)("li",{parentName:"ul"},"String with 1 or 2 characters"),Object(n.b)("li",{parentName:"ul"},"String with repeated characters"),Object(n.b)("li",{parentName:"ul"},"Strings with only one distinct character")),Object(n.b)("h2",null,Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"recommended-leetcode-questions"})),Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#recommended-leetcode-questions"}),"#"),"Recommended Leetcode questions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"}),"Longest Substring Without Repeating Characters")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/longest-repeating-character-replacement/"}),"Longest Repeating Character Replacement")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/minimum-window-substring/description/"}),"Minimum Window Substring")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/valid-anagram"}),"Valid Anagram")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/group-anagrams/"}),"Group Anagrams")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/valid-parentheses"}),"Valid Parentheses")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/valid-palindrome/"}),"Valid Palindrome")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/longest-palindromic-substring/"}),"Longest Palindromic Substring")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/palindromic-substrings/"}),"Palindromic Substrings")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://leetcode.com/problems/encode-and-decode-strings/"}),"Encode and Decode Strings (Leetcode Premium)"))),Object(n.b)("h2",null,Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"more-questions"})),Object(n.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#more-questions"}),"#"),"More questions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Output list of strings representing a page of hostings given a list of CSV strings."),Object(n.b)("li",{parentName:"ul"},"Given a list of words, find the word pairs that when concatenated form a palindrome."),Object(n.b)("li",{parentName:"ul"},"Find the most efficient way to identify what character is out of place in a non-palindrome."),Object(n.b)("li",{parentName:"ul"},"Implement a simple regex parser which, given a string and a pattern, returns a boolean indicating whether the input matches the pattern. By simple, we mean that the regex can only contain the following special characters: ",Object(n.b)("inlineCode",{parentName:"li"},"*")," (star), ",Object(n.b)("inlineCode",{parentName:"li"},".")," (dot), ",Object(n.b)("inlineCode",{parentName:"li"},"+")," (plus). The star means that there will be zero or more of the previous character in that place in the pattern. The dot means any character for that position. The plus means one or more of previous character in that place in the pattern."),Object(n.b)("li",{parentName:"ul"},"Find all words from a dictionary that are x edit distance away."),Object(n.b)("li",{parentName:"ul"},"Given a string IP and number n, print all CIDR addresses that cover that range."),Object(n.b)("li",{parentName:"ul"},"Write a function called ",Object(n.b)("inlineCode",{parentName:"li"},"eval"),", which takes a string and returns a boolean. This string is allowed 6 different characters: ",Object(n.b)("inlineCode",{parentName:"li"},"0"),", ",Object(n.b)("inlineCode",{parentName:"li"},"1"),", ",Object(n.b)("inlineCode",{parentName:"li"},"&"),", ",Object(n.b)("inlineCode",{parentName:"li"},"|"),", ",Object(n.b)("inlineCode",{parentName:"li"},"("),", and ",Object(n.b)("inlineCode",{parentName:"li"},")"),". ",Object(n.b)("inlineCode",{parentName:"li"},"eval")," should evaluate the string as a boolean expression, where ",Object(n.b)("inlineCode",{parentName:"li"},"0")," is ",Object(n.b)("inlineCode",{parentName:"li"},"false"),", ",Object(n.b)("inlineCode",{parentName:"li"},"1")," is ",Object(n.b)("inlineCode",{parentName:"li"},"true"),", ",Object(n.b)("inlineCode",{parentName:"li"},"&")," is an ",Object(n.b)("inlineCode",{parentName:"li"},"and"),", and ",Object(n.b)("inlineCode",{parentName:"li"},"|")," is an ",Object(n.b)("inlineCode",{parentName:"li"},"or"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"E.g ",Object(n.b)("inlineCode",{parentName:"li"},'"(0 | (1 | 0)) & (1 & ((1 | 0) & 0))"')))),Object(n.b)("li",{parentName:"ul"},"Given a pattern string like ",Object(n.b)("inlineCode",{parentName:"li"},'"abba"')," and an input string like ",Object(n.b)("inlineCode",{parentName:"li"},'"redbluebluered"'),", return ",Object(n.b)("inlineCode",{parentName:"li"},"true")," if and only if there's a one to one mapping of letters in the pattern to substrings of the input.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},'"abba"')," and ",Object(n.b)("inlineCode",{parentName:"li"},'"redbluebluered"')," should return ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},'"aaaa"')," and ",Object(n.b)("inlineCode",{parentName:"li"},'"asdasdasdasd"')," should return ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},'"aabb"')," and ",Object(n.b)("inlineCode",{parentName:"li"},'"xyzabcxzyabc"')," should return ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."))),Object(n.b)("li",{parentName:"ul"},"If you received a file in chunks, calculate when you have the full file. Quite an open-ended question. Can assume chunks come with start and end, or size, etc."),Object(n.b)("li",{parentName:"ul"},"Given a list of names (strings) and the width of a line, design an algorithm to display them using the minimum number of lines."),Object(n.b)("li",{parentName:"ul"},"Design a spell-checking algorithm."),Object(n.b)("li",{parentName:"ul"},"Longest substring with ",Object(n.b)("inlineCode",{parentName:"li"},"K")," unique characters.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/04/12/find-the-longest-substring-with-k-unique-characters/"}),"Source")))),Object(n.b)("li",{parentName:"ul"},"Given a set of random strings, write a function that returns a set that groups all the anagrams together.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/05/06/group-anagrams/"}),"Source")))),Object(n.b)("li",{parentName:"ul"},"Given a string, find the longest substring without repeating characters. For example, for string ",Object(n.b)("inlineCode",{parentName:"li"},"'abccdefgh'"),", the longest substring is ",Object(n.b)("inlineCode",{parentName:"li"},"'cdefgh'"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/10/07/facebook-interview-longest-substring-without-repeating-characters/"}),"Source")))),Object(n.b)("li",{parentName:"ul"},"Given a string, return the string with duplicate characters removed."),Object(n.b)("li",{parentName:"ul"},"Write a function that receives a regular expression (allowed chars = from ",Object(n.b)("inlineCode",{parentName:"li"},"'a'")," to ",Object(n.b)("inlineCode",{parentName:"li"},"'z'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'*'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'.'"),") and a string containing lower case english alphabet characters and return ",Object(n.b)("inlineCode",{parentName:"li"},"true")," or ",Object(n.b)("inlineCode",{parentName:"li"},"false")," whether the string matches the regex.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},"'ab*a'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'abbbbba'")," => ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},"'ab*b.'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'aba'")," => ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},"'abc*'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'acccc'")," => ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."))),Object(n.b)("li",{parentName:"ul"},"Given a rectangular grid with letters, search if some word is in the grid."),Object(n.b)("li",{parentName:"ul"},"Given two strings representing integer numbers (",Object(n.b)("inlineCode",{parentName:"li"},"'123'")," , ",Object(n.b)("inlineCode",{parentName:"li"},"'30'"),") return a string representing the sum of the two numbers: ",Object(n.b)("inlineCode",{parentName:"li"},"'153'"),"."),Object(n.b)("li",{parentName:"ul"},"A professor wants to see if two students have cheated when writing a paper. Design a function ",Object(n.b)("inlineCode",{parentName:"li"},"hasCheated(String s1, String s2, int N)")," that evaluates to ",Object(n.b)("inlineCode",{parentName:"li"},"true")," if two strings have a common substring of length ",Object(n.b)("inlineCode",{parentName:"li"},"N"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Follow up: Assume you don't have the possibility of using ",Object(n.b)("inlineCode",{parentName:"li"},"String.contains()")," and ",Object(n.b)("inlineCode",{parentName:"li"},"String.substring()"),". How would you implement this?"))),Object(n.b)("li",{parentName:"ul"},"Print all permutations of a given string."),Object(n.b)("li",{parentName:"ul"},"Parse a string containing numbers and ",Object(n.b)("inlineCode",{parentName:"li"},"'+'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'-'")," and parentheses. Evaluate the expression. ",Object(n.b)("inlineCode",{parentName:"li"},"-2+(3-5)")," should return ",Object(n.b)("inlineCode",{parentName:"li"},"-4"),"."),Object(n.b)("li",{parentName:"ul"},"Output a substring with at most ",Object(n.b)("inlineCode",{parentName:"li"},"K")," unique characters.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},"'aabc'")," and ",Object(n.b)("inlineCode",{parentName:"li"},"k")," = 2 => ",Object(n.b)("inlineCode",{parentName:"li"},"'aab'"),"."))),Object(n.b)("li",{parentName:"ul"},"Ensure that there are a minimum of ",Object(n.b)("inlineCode",{parentName:"li"},"N")," dashes between any two of the same characters of a string.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},"n = 2, string = 'ab-bcdecca'")," => ",Object(n.b)("inlineCode",{parentName:"li"},"'ab--bcdec--ca'"),"."))),Object(n.b)("li",{parentName:"ul"},"Find the longest palindrome in a string."),Object(n.b)("li",{parentName:"ul"},"Give the count and the number following in the series.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},"1122344"),", next: ",Object(n.b)("inlineCode",{parentName:"li"},"21221324"),", next: ",Object(n.b)("inlineCode",{parentName:"li"},"12112211121214"),"."),Object(n.b)("li",{parentName:"ul"},"Count and say problem."))),Object(n.b)("li",{parentName:"ul"},"Compress a string by grouping consecutive similar questions together:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},"'aaabbbcc' =>"),"'a3b3c2'`."))),Object(n.b)("li",{parentName:"ul"},"You have a string consisting of open and closed parentheses, but parentheses may be imbalanced. Make the parentheses balanced and return the new string."),Object(n.b)("li",{parentName:"ul"},"Given a set of strings, return the smallest subset that contains prefixes for every string.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"E.g. ",Object(n.b)("inlineCode",{parentName:"li"},"['foo', 'foog', 'food', 'asdf']")," => ",Object(n.b)("inlineCode",{parentName:"li"},"['foo', 'asdf']"),"."))),Object(n.b)("li",{parentName:"ul"},"Write a function that would return all the possible words generated when using a phone (pre-smartphone era) numpad to type."),Object(n.b)("li",{parentName:"ul"},"Given a dictionary and a word, find the minimum number of deletions needed on the word in order to make it a valid word.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/04/29/minimum-number-of-deletions-of-a-string/"}),"Source")))),Object(n.b)("li",{parentName:"ul"},"How to check if a string contains an anagram of another string?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/04/08/if-a-string-contains-an-anagram-of-another-string/"}),"Source")))),Object(n.b)("li",{parentName:"ul"},"Find all k-lettered words from a string."),Object(n.b)("li",{parentName:"ul"},"Given a string of open and close parentheses, find the minimum number of edits needed to balance a string of parentheses."),Object(n.b)("li",{parentName:"ul"},"Run length encoding - Write a string compress function that returns ",Object(n.b)("inlineCode",{parentName:"li"},"'R2G1B1'")," given ",Object(n.b)("inlineCode",{parentName:"li"},"'RRGB'"),"."),Object(n.b)("li",{parentName:"ul"},"Write a function that finds all the different ways you can split up a word into a concatenation of two other words.")))}b.isMDXComponent=!0}}]);