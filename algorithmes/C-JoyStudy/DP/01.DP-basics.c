#include <algorithm>
#define X -1

// 두가지 종류의 동전 (3원,5원)을 이용하여 18원에 대한 최소 동전 개수를 구하시오.
int dp[19] = { 0, X, X, 1, X, 5 }; // trivials

for (let i = 6; i <= 18; i++)
{
    if (dp[i-3] == X && dp[i-5] == X)
    {
        dp[i] = X;
        continue;
    }
    if (dp[i-3] == X || dp[i-3] == X)
    {
        dp[i] = max(dp[i-3] + 1, dp[i-5] + 1);
    }
    
    dp[i] = min(dp[i-3] + 1, dp[i-5] + 1);
}

printf(dp[18]);


