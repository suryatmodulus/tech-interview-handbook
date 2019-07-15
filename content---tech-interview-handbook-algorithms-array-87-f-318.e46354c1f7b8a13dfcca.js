(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return o}),a.d(t,"rightToc",function(){return l}),a.d(t,"default",function(){return c});a(0);var r=a(117);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o={id:"array",title:"Array"},l=[{value:"Tips",id:"tips",children:[]},{value:"Arrays are sequences",id:"arrays-are-sequences",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended Leetcode questions",id:"recommended-leetcode-questions",children:[]},{value:"More questions",id:"more-questions",children:[{value:"Easy",id:"easy",children:[]},{value:"Medium",id:"medium",children:[]},{value:"Hard",id:"hard",children:[]},{value:"Other",id:"other",children:[]}]}],s={rightToc:l},b="wrapper";function c(e){var t=e.components,a=i(e,["components"]);return Object(r.b)(b,n({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,Object(r.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"tips"})),Object(r.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#tips"}),"#"),"Tips"),Object(r.b)("p",null,"Is the array sorted or partially sorted? If it is, some form of binary search should be possible. This also usually means that the interviewer is looking for a solution that is faster than O(n)."),Object(r.b)("p",null,"Can you sort the array? Sometimes sorting the array first may significantly simplify the problem. Make sure that the order of array elements do not need to be preserved before attempting a sort."),Object(r.b)("p",null,"For questions where summation or multiplication of a subarray is involved, pre-computation using hashing or a prefix/suffix sum/product might be useful."),Object(r.b)("p",null,"If you are given a sequence and the interviewer asks for O(1) space, it might be possible to use the array itself as a hash table. For example, if the array only has values from 1 to N, where N is the length of the array, negate the value at that index (minus one) to indicate presence of that number."),Object(r.b)("h2",null,Object(r.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"arrays-are-sequences"})),Object(r.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#arrays-are-sequences"}),"#"),"Arrays are sequences"),Object(r.b)("p",null,"Are there duplicate values in the array, would it affect the answer?"),Object(r.b)("p",null,"When using an index to iterate through array elements, be careful not to go out of bounds."),Object(r.b)("p",null,"Be mindful about slicing or concatenating arrays in your code. Typically, slicing and concatenating arrays require O(n) time. Use start and end indices to demarcate a subarray/range where possible."),Object(r.b)("p",null,"Sometimes you can traverse the array from the right rather than from the left."),Object(r.b)("p",null,"Master the ",Object(r.b)("a",n({parentName:"p"},{href:"https://discuss.leetcode.com/topic/30941/here-is-a-10-line-template-that-can-solve-most-substring-problems"}),"sliding window technique")," that applies to many subarray problems."),Object(r.b)("p",null,"When you are given two arrays to process, it is common to have one index per array (pointer) to traverse/compare the both of them. For example, we use the same approach to merge two sorted arrays."),Object(r.b)("h2",null,Object(r.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"corner-cases"})),Object(r.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#corner-cases"}),"#"),"Corner cases"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Empty sequence"),Object(r.b)("li",{parentName:"ul"},"Sequence with 1 or 2 elements"),Object(r.b)("li",{parentName:"ul"},"Sequence with repeated elements")),Object(r.b)("h2",null,Object(r.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"recommended-leetcode-questions"})),Object(r.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#recommended-leetcode-questions"}),"#"),"Recommended Leetcode questions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://leetcode.com/problems/two-sum/"}),"Two Sum")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"}),"Best Time to Buy and Sell Stock")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://leetcode.com/problems/contains-duplicate/"}),"Contains Duplicate")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://leetcode.com/problems/product-of-array-except-self/"}),"Product of Array Except Self")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://leetcode.com/problems/maximum-subarray/"}),"Maximum Subarray")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://leetcode.com/problems/maximum-product-subarray/"}),"Maximum Product Subarray")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"}),"Find Minimum in Rotated Sorted Array")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://leetcode.com/problems/search-in-rotated-sorted-array/"}),"Search in Rotated Sorted Array")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://leetcode.com/problems/3sum/"}),"3Sum")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://leetcode.com/problems/container-with-most-water/"}),"Container With Most Water"))),Object(r.b)("h2",null,Object(r.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"more-questions"})),Object(r.b)("a",n({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#more-questions"}),"#"),"More questions"),Object(r.b)("h3",null,Object(r.b)("a",n({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"easy"})),Object(r.b)("a",n({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#easy"}),"#"),"Easy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Implement a circular buffer using an array. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Given an array of integers, print out a histogram using the said array; include a base layer (all stars) (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/program-make-histogram-array/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Given an array and an index, find the product of the elements of the array except the element at that index. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/a-product-array-puzzle/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Given 2 separate arrays, write a method to find the values that exist in both arrays and return them. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/union-and-intersection-of-two-sorted-arrays-2/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Given an input array and another array that describes a new index for each element, mutate the input array so that each element ends up in their new index (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/reorder-a-array-according-to-given-indexes/"}),"Solution"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Discuss the runtime of the algorithm and how you can be sure there would not be any infinite loops"))),Object(r.b)("li",{parentName:"ul"},"Given an array of non-negative numbers, find continuous subarray with sum to S. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/find-subarray-with-given-sum/"}),"Solution 1"),") (",Object(r.b)("a",n({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/06/01/subarray-with-given-sum/"}),"Solution 2"),")"),Object(r.b)("li",{parentName:"ul"},"Given an array of numbers list out all triplets that sum to 0. Do so with a running time of less than O(n^3). (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/"}),"Solution 1"),") (",Object(r.b)("a",n({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/07/19/3sum/"}),"Solution 2"),")"),Object(r.b)("li",{parentName:"ul"},"Given an array of numbers list out all quadruplets that sum to 0. Do so with a running time of less than O(n^4). (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/find-four-numbers-with-sum-equal-to-given-sum/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Given an array of integers, find the subarray with the largest sum. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Find the second maximum value in an array. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/find-second-largest-element-array/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Rotate an array by an offset of k. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/array-rotation/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Remove duplicates in an unsorted array where the duplicates are at a distance of k or less from each other. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/check-given-array-contains-duplicate-elements-within-k-distance/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Given an unsorted list of integers, return true if the list contains any duplicates within k indices of each element. Do it faster than O(n^2). (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/check-given-array-contains-duplicate-elements-within-k-distance/"}),"Solution"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Given an unsorted list of integers, return true if the list contains any fuzzy duplicates within k indices of each element. A fuzzy duplicate is another integer within d of the original integer. Do it faster than O(n^2)."),Object(r.b)("li",{parentName:"ul"},"E.g. If d = 4, then 6 is a fuzzy duplicate of 3 but 8 is not."))),Object(r.b)("li",{parentName:"ul"},"Say you have an unordered list of numbers ranging from 1 to n, and one of the numbers is removed, how do you find that number? What if two numbers are removed? (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/find-the-missing-number/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Given an array of string, find the duplicated elements. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/"}),"Solution 1"),") (",Object(r.b)("a",n({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/05/10/duplicate-elements-of-an-array/"}),"Solution 2"),")"),Object(r.b)("li",{parentName:"ul"},"Given an array of integers, find a maximum sum of non-adjacent elements. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/"}),"Solution 1"),") (",Object(r.b)("a",n({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/12/02/uber-interview-question-maximum-sum-non-adjacent-elements/"}),"Solution 2"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"E.g. ",Object(r.b)("inlineCode",{parentName:"li"},"[1, 0, 3, 9, 2]")," should return ",Object(r.b)("inlineCode",{parentName:"li"},"10 (1 + 9)"),"."))),Object(r.b)("li",{parentName:"ul"},"Given an array of integers, modify the array by moving all the zeroes to the end (right side). The order of other elements doesn't matter. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/move-zeroes-end-array/"}),"Solution 1"),") (",Object(r.b)("a",n({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/11/18/uber-interview-question-move-zeroes/"}),"Solution 2"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"E.g. ",Object(r.b)("inlineCode",{parentName:"li"},"[1, 2, 0, 3, 0, 1, 2]"),", the program can output ",Object(r.b)("inlineCode",{parentName:"li"},"[1, 2, 3, 1, 2, 0, 0]"),"."))),Object(r.b)("li",{parentName:"ul"},"Given an array, return the length of the longest increasing contiguous subarray. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/longest-increasing-subarray/"}),"Solution 1"),") (",Object(r.b)("a",n({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2017/02/02/uber-interview-questions-longest-increasing-subarray/"}),"Solution 2"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"E.g., ",Object(r.b)("inlineCode",{parentName:"li"},"[1, 3, 2, 3, 4, 8, 7, 9]"),", should return ",Object(r.b)("inlineCode",{parentName:"li"},"4")," because the longest increasing array is ",Object(r.b)("inlineCode",{parentName:"li"},"[2, 3, 4, 8]")))),Object(r.b)("li",{parentName:"ul"},"Given an array of integers where every value appears twice except one, find the single, non-repeating value. Follow up: do so with O(1) space. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears-twice/"}),"Solution"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"E.g., ",Object(r.b)("inlineCode",{parentName:"li"},"[2, 5, 3, 2, 1, 3, 4, 5, 1]")," returns 4, because it is the only value that appears in the array only once.")))),Object(r.b)("h3",null,Object(r.b)("a",n({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"medium"})),Object(r.b)("a",n({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#medium"}),"#"),"Medium"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Given a list of item prices, find all possible combinations of items that sum a particular value ",Object(r.b)("inlineCode",{parentName:"li"},"K"),". (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/combinational-sum/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Given an array of integers find whether there is a sub-sequence that sums to 0 and return it. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/find-if-there-is-a-subarray-with-0-sum/"}),"Solution"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"E.g. ",Object(r.b)("inlineCode",{parentName:"li"},"[1, 2, -3, 1]")," => ",Object(r.b)("inlineCode",{parentName:"li"},"[1, 2, -3]")," or ",Object(r.b)("inlineCode",{parentName:"li"},"[2, -3, 1]")))),Object(r.b)("li",{parentName:"ul"},"Trapping rain water: You have an array with the heights of an island (at point 1, point 2 etc) and you want to know how much water would remain on this island (without flowing away). (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/trapping-rain-water/"}),"Solution"),")")),Object(r.b)("h3",null,Object(r.b)("a",n({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"hard"})),Object(r.b)("a",n({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#hard"}),"#"),"Hard"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Given a set of rectangles represented by a height and an interval along the y-axis, determine the size of its union. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/divide-and-conquer-set-7-the-skyline-problem/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Given an array, find the longest arithmetic progression. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/longest-arithmetic-progression-dp-35/"}),"Solution"),")"),Object(r.b)("li",{parentName:"ul"},"Given an unsorted array of integers, find the length of the longest consecutive elements sequence.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"E.g. ",Object(r.b)("inlineCode",{parentName:"li"},"[100, 4, 200, 1, 3, 2] => 4"),". Explanation: The longest consecutive elements sequence is ",Object(r.b)("inlineCode",{parentName:"li"},"[1, 2, 3, 4]"),". Therefore its length is 4. Note: Your algorithm should run in O(n) complexity. (",Object(r.b)("a",n({parentName:"li"},{href:"https://www.geeksforgeeks.org/longest-consecutive-subsequence/"}),"Solution"),")")))),Object(r.b)("h3",null,Object(r.b)("a",n({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"other"})),Object(r.b)("a",n({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#other"}),"#"),"Other"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In an array of arrays, e.g. given ",Object(r.b)("inlineCode",{parentName:"li"},"[[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []]"),", print: ",Object(r.b)("inlineCode",{parentName:"li"},"1, 2, 3, 4, 5, 6, 7, 8, 9, 10"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Implement an iterator that supports ",Object(r.b)("inlineCode",{parentName:"li"},"hasNext()"),", ",Object(r.b)("inlineCode",{parentName:"li"},"next()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"remove()")," methods."))),Object(r.b)("li",{parentName:"ul"},"Paginate an array with constraints, such as skipping certain items."),Object(r.b)("li",{parentName:"ul"},"Given array of arrays, sort them in ascending order."),Object(r.b)("li",{parentName:"ul"},"Given an array containing only digits ",Object(r.b)("inlineCode",{parentName:"li"},"0-9"),", add one to the number and return the array.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"E.g. Given ",Object(r.b)("inlineCode",{parentName:"li"},"[1, 4, 2, 1]")," which represents ",Object(r.b)("inlineCode",{parentName:"li"},"1421"),", return ",Object(r.b)("inlineCode",{parentName:"li"},"[1, 4, 2, 2]")," which represents ",Object(r.b)("inlineCode",{parentName:"li"},"1422"),".")))))}c.isMDXComponent=!0}}]);