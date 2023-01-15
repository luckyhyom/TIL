#include <algorithm>
#define X 5000

// 두가지 종류의 동전 (3원,5원)을 이용하여 18원에 대한 최소 동전 개수를 구하시오. 0원~5000원
int dp[19] = { 0, X, X, 1, X, 5 }; // trivials

for (let i = 6; i <= 18; i++)
{
    dp[i] = min(dp[i-3] + 1, dp[i-5] + 1);
}

if(dp[18] >= X) {
    printf("-1");
    return 0;
}

print(dp[18]);