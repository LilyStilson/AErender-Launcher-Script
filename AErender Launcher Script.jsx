/*     
*     MIT License
*     
*     Copyright (c) 2020 Alice Romanets
*     
*     Permission is hereby granted, free of charge, to any person obtaining a copy
*     of this software and associated documentation files (the "Software"), to deal
*     in the Software without restriction, including without limitation the rights
*     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*     copies of the Software, and to permit persons to whom the Software is
*     furnished to do so, subject to the following conditions:
*     
*     The above copyright notice and this permission notice shall be included in all
*     copies or substantial portions of the Software.
*     
*     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*     SOFTWARE.
*/     

/// Interface Section ///

var OS = $.os.indexOf("Mac") != -1 ? "darwin": "windows";
/// Main Form

var LauncherIconCode    = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%20%08%06%00%00%00szz%C3%B4%00%00%01%1BiTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%0A%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22XMP%20Core%205.5.0%22%3E%0A%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%0A%20%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%2F%3E%0A%20%3C%2Frdf%3ARDF%3E%0A%3C%2Fx%3Axmpmeta%3E%0A%3C%3Fxpacket%20end%3D%22r%22%3F%3E%1AJ%C2%AB%C3%AA%00%00%01%C2%81iCCPsRGB%20IEC61966-2.1%00%00(%C2%91u%C2%91%C3%8F%2BDQ%14%C3%87%3F%06%C2%91%1FQ%C2%88%C2%85%C3%85%10VF~%C2%94%C3%98X%C2%8C%18%0A%C2%8B%C3%B1%C2%94%C3%81f%C3%A6%C3%8D%7B3jf%C2%BC%C3%9E%1BI%C2%B6%C3%8Av%C2%8A%12%1B%C2%BF%16%C3%BC%05l%C2%95%C2%B5RDJ66%C3%96%C3%84%C2%86%C3%A99o%C3%9E%C3%94H%C3%A6%C3%9C%C3%AE%C2%B9%C2%9F%C3%BB%C2%BD%C3%A7%C2%9C%C3%AE%3D%17%3CJBMZe%C2%BD%C2%90L%C2%A5%C3%8D%60%C3%80%C3%AF%C2%9D%0F-x%2B%5E(%C2%A1%C2%89J%C3%9Ah%0E%C2%AB%C2%961%3D%3B%C2%AEP%C3%94%3E%C3%AF%25Z%C3%AC%C3%96%C3%A7%C3%94*%1E%C3%B7%C2%AFUG5K%C2%85%C2%92J%C3%A1%11%C3%950%C3%93%C3%82%13%C3%82Ski%C3%83%C3%A1%1D%C3%A1F5%1E%C2%8E%0A%C2%9F%09w%C2%9BrA%C3%A1%3BG%C2%8F%C2%B8%C3%BC%C3%AAp%C3%8C%C3%A5o%C2%87M%258%0A%C2%9Ezao%C3%AC%17G~%C2%B1%1A7%C2%93%C3%82%C3%B2r%3A%C2%92%C2%89U5%7F%1F%C3%A7%255ZjnV%C3%96v%C2%99%C2%ADX%04%09%C3%A0%C3%87%C3%8B%24c%C2%8C2H%1F%C3%83%C3%A2%07%C3%B1%C3%91O%C2%8F%C3%AC(%C2%92%C3%9F%C2%9B%C3%8B%C2%9FaErU%C3%B1%06%C3%AB%C2%98%2C%13%23N%C2%9AnQW%C2%A5%C2%BA%26%C2%AB.%C2%BA%26%23%C3%81%C2%BA%C3%93%C3%BF%C2%BF%7D%C2%B5%C3%B4%C2%81~%C2%B7z%C2%8D%1F%C3%8A%C2%9Fm%C3%BB%C2%BD%13*%C2%B6!%C2%9B%C2%B1%C3%AD%C2%AF%23%C3%9B%C3%8E%1EC%C3%A9%13%5C%C2%A6%0A%C3%B9%2B%C2%870%C3%B4!z%C2%A6%C2%A0u%1C%40%C3%9D%26%C2%9C_%15%C2%B4%C3%88.%5ClA%C3%8B%C2%A3%116%C3%839%C2%A9T%C2%A6G%C3%97%C3%A1%C3%AD%14jC%C3%90p%03U%C2%8Bn%C3%8F%C3%B2%C3%A7%C2%9C%3C%C2%80%C2%B2!_u%0D%7B%C3%BB%C3%90%25%C3%B1uK%3FJ%C2%88g%C3%99%C2%A7%C3%A5_%C3%BE%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%04SIDATX%C2%85%C3%85%C2%97mL%C2%95e%18%C3%87%7F%C3%8Fy%C3%A5%C3%A5p%C3%A0%00G9%C2%B2%C3%A4%20%1C%10%C2%8E%20%C3%B2%26%2FYa%C2%B3%01%C3%91%C2%96s%C3%A6l%C2%B1j%C2%8B%26%C2%AD%C2%B9V%C2%B9Z5%C2%95%C3%95%C2%AA%C3%8DZs%2C3%C3%BB%C2%90%7D%C2%A1i%C3%A5%C2%87f%C3%8E%C3%99*%09%08%C2%95wQ%0CQ%20%40%C3%8E%01%C3%8E%0B%C3%88%C3%8B%C3%82%C3%B3%C3%B2%C3%B4%C3%A1p%C2%98%C2%96%C3%80%C3%A1%00%C3%B6%C3%BFx%3D%C3%B7%C3%BD%C3%BC%7F%C2%BB%C3%AE%C3%BB%C2%BA%C3%AE%C3%BB%16%00%01%C2%90%02A%40%C3%A4%13%25%2F%C2%A7%25%C2%A5n%C3%89%C2%8E%C2%88%C2%8C%C2%8E%05Q*%C2%8A%C2%A2%C3%80%12%24%08%C2%82%08%C2%82%C3%8Bj%C2%B9%C3%95s%C3%ADr%C3%8D%C2%A5s%C2%A7%C2%8F%C2%B5%02%16%60%0Ap%09%C2%80%0CP%C3%85%25d%18%C3%B7%C2%BC~%C2%B4%22%3E1%C3%B3q%C2%A7%C3%93%C3%81%40o%2FS%13%13K%C3%B1%C2%9EU%C2%90J%C3%85C%C3%BAX%C2%A42%197%3A%1B%7F%C3%B9%C3%B2%C2%B3%C3%B2%C3%BD7%3A%1B%3B%C2%80%09%01%08V%06%04%C3%87U%1E%C3%AF8%11%C2%A6%C2%89Z%7F%C3%B2%C3%AB%C2%AF8%7B%C3%AA%3B%1C%0E%C3%87%C2%B2%C2%98%7B%25%C2%97%C3%8B)%C3%9A%C3%B1%0C%3B_x%09%C2%BB%C3%8D%C3%B4%C3%A7%C3%9E%17%C2%8D%C2%BB%C2%A6%C3%BF%C2%9E%C2%BC)%05%22%C3%B6%1D8%C3%B9%C2%A6!)%C2%BB%C3%B0%C3%93%03%C3%AFP%7D%C3%B6%0Cn%C2%B7%7BY%C3%8D%01%C3%9Cn7%C2%9DW%C3%9A%C3%A9%C3%AB%C2%BE%C3%89%C2%B6%C2%A7vD%C2%AE%C3%95%1B%C2%A9%C3%BD%C3%AD%C3%84%05%09%C2%A0%C3%96%C3%87m%C3%9Cz%C2%A9%C2%A6%C2%9A%C3%A6%C3%BA%C2%BAe7%C3%BE%C2%B7%C2%9A%C3%BE%C2%A8%C2%A5%C2%B1%C2%AE%06%7D%5C%C3%AAV%40-%01%025%C3%A1Qk%C2%AF45%C2%AC%C2%B8%C2%B9W%C3%AD%C3%8D%C2%8Dh%C3%82u1%40%C2%A0%04%C2%90%2B%C2%94%C2%81%01%C2%83%C3%BD%7D%0F%0C%C3%80%C3%94%C3%9F%C2%87B%19%18%00%C3%88ex%C3%8A%10Q%14%17%C2%9C%C3%B8%C3%8A%C3%9B%C3%AF%11kH%04%C3%A0%C3%B3%C2%8F%C3%9F%C2%A7%C2%B7%C3%AB%C2%BA_%00w%C3%AD1A%C3%A6%C3%AB%24A%C2%90%C2%90%C2%96%C2%9D%C2%8B%3A%2C%0C%C2%80%C2%AC%C3%BCG%C3%BC%06%C2%B8%5B%12_%07%C3%AA%C3%A3%0D%C2%A8%C3%83%C3%82fM%C3%93s%C3%B3%C2%96l%C2%BE(%C2%80%C2%B4%C3%8D9%00%C2%9C%C3%BB%C3%B1%14%C2%B7GG%C2%895%24%12%1E%C2%A9%C2%BD%C3%AFX%C2%A9L%C2%866J%C3%87%C3%BA%C2%94%C2%8D%C2%AC%C3%92%C2%ADY%1E%C2%80M%C2%9Bs%01%C2%B8%C3%9A%C3%92%C3%8C%C3%95%C3%96%C3%A6%7Bb%5E%C3%A9%0D%09%C2%BC%C3%B5%C3%A1!%C2%8E%C2%9F%C3%BE%C2%99%C3%8A%C2%AA%C3%AF9x%C3%B8%08%C2%99%C3%B9%5B%C2%96%0E%C2%A0%0AQcH6b%C2%B3%C2%8C0l%1A%C2%A4%C2%A3%C2%A5%C3%89%03%C2%90s%C3%AF2%C3%84%C2%AC%C2%8BcSN%1Er%C2%85%C2%82%C2%A9%C3%89%09%06%C3%BE%C3%AA%C3%85%3A2%3C%C3%AF%C2%BF%7D%C3%9A%C2%84)%C2%99Y%08%C2%82%C2%84%C2%8E%C3%96%16DQ%C3%A4%C3%8A%0C%40Jf%16r%C2%85%02%C3%87%C2%9D%3B%00%C2%B3%C3%AD%7B%C3%BC%C3%B6%18eO%17%C3%BB%C3%B2k%C3%9F2%C2%90%C2%96%C3%ADIuG%C2%9B'%C3%B5%C3%A6%5B%03%C3%98%C2%AD%16%C2%94%C3%8A%00%C2%92%C3%93%C3%92%7D2%C2%9AK%0Bf%C3%80S~%C2%9B%01(-%C3%9F%C3%8B%C3%AE%C2%B2r%00%C2%82%C2%82U%00d%C3%A4%C3%A4%C3%91v%C3%A9%C2%82%C3%9F%00%0Bf%40%1Fo%20T%13%0E%40%60P%10!%C3%AAPB%C3%94%C2%A1H%C2%A5R%C3%80%C2%B3%0F%04%C3%81%C3%BF%2B%C3%83%C2%82%19%C3%B0%C2%96_%C3%BD%C3%B9_%C2%A9%3Avd6%1E%C2%A1%C3%95r%C3%B0%C3%B0%17h%C2%A3tD%C3%87%C3%A8%19%C3%A8%C3%ADY%19%00o%C2%A95%C3%97%C3%972b6%C3%8D%C3%86-Cf%C2%86M%26V%C3%A9t%C2%A4%C3%A7%C3%A6%C3%BB%0D0%C3%AF%12x%C3%8B%0F%3C'%C3%98%C3%9D%12E%C2%91%C3%8B%C2%8D%17%01H%C3%8F%C3%B1%C2%BF%2B%C3%8E%0B%60L%C3%8F%40%10%24%C3%B4%C3%B7t3j%C2%B5%C3%BE%C3%A7%7B%5B%C2%83%07%20qC%0A%C3%81*%C2%95_%00%C3%B3.ACM5%C2%A5%C2%85%05s%C3%9E%C2%90%1A%C3%ABj(-%2C%00%C3%80%C3%A9pp%C3%B1%C3%B7%C3%B3%C2%94m%2F%5E%C3%94%C2%8Dj%5E%00%C2%B7%C3%9B%C2%8D%7B%C2%A6%C3%89%C3%9CO%C2%A2(%C3%8E6!%00%C2%97%C3%93%C3%89%C3%B8%C3%98%C2%98%C3%8F%C3%A6%C2%B0%C2%88%C2%B3%60%C2%A5%24%01%5C.%C2%A7%C3%83%C2%A5%C2%99%C3%A3d%5B%09EhW%C3%A1r%3A%5C%C2%80K%02L%C3%9BmfS%C2%82q%C3%83%03%03%C2%88OJ%C3%86n3%0F%02%C3%93%12%60r%C3%88%C3%9C%C3%93ZPT%C3%82%C2%9A%C2%B51%2Bn%1E%1D%C2%A3%C2%A7%C2%A0%C2%A8%04%C2%B3%C2%A9%C2%BB%0D%C2%98%C2%90%02BwWk%C3%BF%C2%A3%C3%9B%C2%9E-%C3%89z%C3%B8%C2%B1%C3%80%C2%9B%C2%9D%C3%97%C2%B0%C2%8D%C2%8C%C2%AC%C2%88%C2%B9!%C3%99%C3%88k%07%3E%40*%13%C3%AD%C2%9FT%C3%ACzc%C3%8C%3E%C3%9C%2B%00%0A%20%C2%B2x%C3%BB%C2%ABO%C3%AE%7C%C3%AE%C3%9D%C2%8A%C2%90P%C2%AD%C3%AE%C3%BA%C3%95vz%C2%BA%3A%C2%97%C3%B5i%16kH%24qC*c%C3%B6!%C3%93%0FU%1F%C3%AD%C3%BF%C3%A9T%C3%A5%19%C3%80%22%C3%A0%C3%99%C2%88%0A%20%5C%13%C2%A1%5B%C3%B7%C3%BC%C2%9EC%C2%BBWG%C3%85%C2%A6%C2%84iV%C2%AFAX%C2%A6*%11q%C2%8F%C3%9A%C2%87%06%C2%87%C3%8C%3D%C3%AD%C3%9F%1C%C3%9D%C3%B7%C2%AD%C3%9Dj%C3%AA%06l%C3%80%1D%C3%AF1%26%C3%81%C3%93%13%C2%82%C2%80%10%20%18P%C3%8E%C3%84%C2%97%C3%B4%3A%06D%C3%80%0DL%03%C2%93%C3%808%C2%9E%C2%97%C2%B1s%26%C3%BE%C3%BF%C3%AA%1F%C3%B2%C2%B9%C2%81l%C3%A1F%C2%B9%C3%83%00%00%00%00IEND%C2%AEB%60%C2%82"; 

var SendIconCode        = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%20%08%06%00%00%00szz%C3%B4%00%00%01%1BiTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%0A%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22XMP%20Core%205.5.0%22%3E%0A%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%0A%20%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%2F%3E%0A%20%3C%2Frdf%3ARDF%3E%0A%3C%2Fx%3Axmpmeta%3E%0A%3C%3Fxpacket%20end%3D%22r%22%3F%3E%1AJ%C2%AB%C3%AA%00%00%01%C2%82iCCPsRGB%20IEC61966-2.1%00%00(%C2%91u%C2%91%C3%8F%2BDQ%14%C3%87%3F3%C2%83%C2%99%C3%BC%C2%88baa14%C2%AC%C2%90%1F5%C2%B1%C2%B1%C2%98%C2%89%C2%A1%C2%B0%18O%C3%B9%C2%B5%C2%99y%C3%A6%C2%87%C2%9A7%C3%B3z%C3%AFI%C2%B2U%C2%B6%C2%8A%12%1B%C2%BF%16%C3%BC%05l%C2%95%C2%B5RDJV%16%C3%96%C3%84%06%3D%C3%A7yj%24sn%C3%A7%C2%9E%C3%8F%C3%BD%C3%9E%7BN%C3%B7%C2%9E%0B%5E%25%C2%A7jfY%17hy%C3%8B%C2%88%C3%87%22%C3%81%C2%A9%C3%A9%C2%99%C2%A0%C3%BF%11%2F%15%04h%C2%A6)%C2%A1%C2%9A%C3%BA%C3%98%C3%84%C2%90BI%7B%C2%BB%C3%81%C3%A3%C3%84%C2%AB%0E%C2%A7V%C3%A9s%C3%BFZ%C3%95%7C%C3%8AT%C3%81%13%10%1EPu%C3%83%12%1E%16%1E%5D%C2%B2t%C2%877%C2%85%1B%C3%94lb%5E%C3%B8X%C2%B8%C3%9D%C2%90%0B%0A_%3Bz%C3%92%C3%A5'%C2%873.%7F8l(%C3%B1(x%C3%AB%C2%84%C2%83%C2%99_%C2%9C%C3%BC%C3%85j%C3%96%C3%90%C2%84%C3%A5%C3%A5%C2%84%C2%B4%C3%9C%C2%A2%C3%BAs%1F%C3%A7%25%C3%95%C2%A9%C3%BC%C3%A4%C2%84%C3%84%16%C3%B1%26L%C3%A2%C3%84%C2%88%10d%C2%84A%C2%A2%C2%84%C3%A9%C2%A6_%C3%A60%1D%C3%B4%C3%90)%2BJ%C3%A4w%7D%C3%A7%C2%8FS%C2%90%5CUf%C2%9De%0C%16%C3%88%C2%90%C3%85%C2%A2%5D%C3%94E%C2%A9%C2%9E%C2%92%C2%98%16%3D%25%23%C3%87%C2%B2%C3%93%C3%BF%C2%BF%7D5%C3%93%C2%BD%3Dn%C3%B5%C3%AA%08%C2%94%3F%C3%98%C3%B6K%2B%C3%B87%C3%A0s%C3%9D%C2%B6%C3%9F%C3%B7m%C3%BB%C3%B3%00%7C%C3%B7p%C2%96%2F%C3%A6%17%C3%B6%C2%A0%C3%AFU%C3%B4%C3%B5%C2%A2%16%C3%9A%C2%85%C3%9AU89%2Fj%C3%89-8%5D%C2%83%C3%86%3B%3Da%24%C2%BE%25%C2%9F%C2%B87%C2%9D%C2%86%C3%A7%23%C2%A8%C2%99%C2%86%C3%BAK%C2%A8%C2%9Cu%7B%C3%B6%C2%B3%C3%8F%C3%A1-(%2B%C3%B2U%17%C2%B0%C2%BD%03mr%C2%BEv%C3%AE%0B8%C2%B8g%C3%91%C3%A4%C3%A3%C3%AB%C2%A4%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%02%3EIDATX%C2%85%C3%A5%C2%97%3Dh%14A%18%C2%86%C2%9F7%C2%89b%14%13%09%24%C2%A5%C2%A4%105%C2%AD%22HH%C2%B0Ke%24%09%0A%16A%C2%B1%C3%90J%C2%88g%C2%AA4%C2%96%C2%96%16%C3%96%C2%82%18%0C6%22%C2%82%08%C3%BE%14%16%22%C2%82%C3%A2%0F%22DPP%C3%81%C3%86CQ%C3%BC%C2%89%C2%88z%C2%AF%C3%85%C3%8E%C3%81x%C3%9E%C3%9E%C3%AD%C2%BAk%0A%7Da%C3%A1%C2%9B%C3%B9f%C2%BEy%C3%A6%C3%9Bo%C3%A6n%C3%A1%7F%C2%97%00l%0F%02%C2%BB%C2%80%C2%AE%0Cs%0C%C3%9C%C2%91t%C2%AB4%0A%C3%9B%C2%8F%C2%9DO%C3%9Fl%C3%AF.%13%C3%A0SN%C2%80r!%22%C2%80cm%C3%86M%C2%97%0D%C3%91Q%60%C3%AE%17%C2%92%C2%9A9W%04%C2%A2%08%C3%80%1E%C3%A0%7DQ%C2%88%22%00w%C2%81%C2%B1%C2%A2%10E%00%C2%90T%18%C2%A2%10%40%19%10Y.%C2%9E4%1D%C2%B1%C3%BD9j%C3%9F%00%26%23%08%24%C2%9D%C3%8F%14)%C3%871%C3%9C%C2%9B%C3%A3%C2%9Exg%C2%BB%C3%AD%06%C3%B3f%C3%A0%3A%C3%B0%00%C3%98%C3%9CbL'%C2%B0%12X%07t%03%1F%5B%05%C3%8CU%03%C2%92%C3%9EJ%C3%9A%22iu%C3%9A%03%1C%C3%8E%13%C2%B3p%11%16%C3%95%C2%B2%00%C3%98%1E%C2%B2%7D%C3%93%C3%B6%5C%C2%A3%C2%AF%C3%88)%C3%88%C2%A31%60%04%18%C2%B1%C3%9D%2F%C3%A9h%C3%9D%C2%B1%5C%C2%AF%C3%A0%0C%C3%B0(%C3%98%15%C3%9B'%C3%AA%C2%8E%C3%94%0C%C3%98%C2%9E%00%C2%BA%C3%92%C3%8E%C2%B2%C3%AD%7D%C3%80%0C%C2%B0%C2%A2%C3%81%C3%95%17%C3%99%C2%B7m%C3%97%C2%82%C3%9D%13%C3%B5Wl%7F%C2%954W%0F%C3%B6%C3%8B%3D%60%C2%BB%C3%93%C3%B6%2B%C3%9B%1Fl%C3%B7%C2%A6%00%C3%9C%C3%8Fq'4%C3%93%C3%ABV%19%18%01%C2%9E%04%7B%1C8k%C2%BB%03%C2%98%02%C2%A6%C2%81%C3%8B%24%C3%87m%3F%C3%89%C2%99%C2%8F%C2%B5%11%18%0E%C3%B6%02%C3%B0%3D%C3%98%C2%9B%C2%80%C3%AD%C3%81%C2%AE%01%C2%B3%C3%B1n%1A3p%C3%92%C3%B6%C2%AC%C3%AD%19%C3%9B%17C%C3%9F%C2%A8%C3%AD%C2%87%C2%B67%C3%98%5E%C2%B4%C2%BD5%253%07%C2%A3%5D%C2%AE%0D%7D%C2%83%C2%B6%C2%AB%C2%A1%C3%AFGx%7D4%C3%8D%40%C2%B4%C3%93g%C2%81t8%04%1A%07%06%C2%80%C3%93%24%C2%B7%C3%9D%10p%2F%25%C2%83%C2%8D%C2%9A%04%C3%BAC%C2%BC%03%C2%92%C3%A6S%01%C2%80ma%C2%81%C3%A3%C2%A1%7D%0A%C3%98%09%3C%05%5E%02%3B%24%C3%95%C2%9A%C3%8Ck%C2%A5%05%60%3DpU%C3%92%C2%95%C3%98%C3%91%0C%60%0A%C2%B8%24%C3%A9%1A%C2%80%C3%AD%0B%24%C3%BF~%0E%01%13%C3%80s%C3%9BK%C3%80%C2%A8%C2%A47YV%C2%97T%05*%C2%A9%03%C3%A2%1A%C2%B0%C3%9Dk%C2%BB%3B%C3%B2%C2%AD%C2%B2%C3%9D%17%C2%B5%07b%7F%C2%93X%C2%BF%C3%95%40K%C2%B8%3A%00%C2%B0%26%C3%8Bnr%C2%AAGR%C2%A6_%C3%83%17%7Fa%C3%B1*%C2%B0%C3%94n%C3%90%C2%9F%7C%C2%9AeQ%C2%8D%C2%A4%C3%A0%16K%C2%8A%C3%B7%0F%C3%AB'%C3%B8'6%C2%92%3D%3F%C3%92%C2%A5%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var ExportIconCode      = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%20%08%06%00%00%00szz%C3%B4%00%00%01%1BiTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%0A%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22XMP%20Core%205.5.0%22%3E%0A%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%0A%20%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%2F%3E%0A%20%3C%2Frdf%3ARDF%3E%0A%3C%2Fx%3Axmpmeta%3E%0A%3C%3Fxpacket%20end%3D%22r%22%3F%3E%1AJ%C2%AB%C3%AA%00%00%01%C2%82iCCPsRGB%20IEC61966-2.1%00%00(%C2%91u%C2%91%C2%BFKBQ%14%C3%87%3F%C3%9AO%C3%8A0%C2%A8%C2%A1%C2%A1A%C3%82%C2%9A4%C2%AC%20%C2%8A%C2%A0%C3%81(%0B%C2%AAA%0D%C2%B2Z%C3%B4%C3%B9%2BP%7B%C2%BC%C2%A7%C2%84%C2%B4%06%C2%ADBA%C3%94%C3%92%C2%AF%C2%A1%C3%BE%C2%82Z%C2%83%C3%A6%20(%C2%8A%20%C2%9A%1A%C2%9A%C2%8BZJ%5E%C3%A7%C2%A9%60D%C2%9E%C3%8B%C2%B9%C3%A7s%C2%BF%C3%B7%C2%9E%C3%83%C2%BD%C3%A7%C2%825%C2%98R%C3%92z%C2%BD%07%C3%92%C2%99%C2%AC%C3%A6%C3%B7y%1D%C2%8B%C2%A1%25G%C3%93%0BV%1A%C2%B11%C3%86XX%C3%91%C3%95%C2%B9%C3%80T%C2%90%C2%9A%C3%B6y%C2%8F%C3%85%C2%8C%C2%B7n%C2%B3V%C3%ADs%C3%BFZk4%C2%A6%2B%60i%16%1EWT-%2B%3C-%3C%C2%BB%C2%9EUM%C3%9E%11%C3%AET%C2%92%C3%A1%C2%A8%C3%B0%C2%99%C2%B0K%C2%93%0B%0A%C3%9F%C2%99z%C2%A4%C3%8C%C2%AF%26'%C3%8A%C3%BCm%C2%B2%16%C3%B4O%C2%80%C2%B5%5D%C3%98%C2%91%C3%B8%C3%85%C2%91_%C2%AC%24%C2%B5%C2%B4%C2%B0%C2%BC%1Cg%3A%C2%95S*%C3%B71_b%C2%8Be%16%02%12%7B%C3%84%C2%BB%C3%91%C3%B1%C3%A3%C3%83%C2%8B%C2%83%19%26%C2%99%60%C2%98%01Fe%1E%C3%86%C3%8D%20%C3%BD%C2%B2%C2%A2F%C2%BE%C2%A7%C2%94%3F%C3%8F%C2%9A%C3%A4*2%C2%AB%C3%A4%C3%91X%25A%C2%92%2C.QsR%3D%261.zLF%C2%8A%C2%BC%C3%99%C3%BF%C2%BF%7D%C3%95%C3%A3C%C2%83%C3%A5%C3%AA6%2F4%3C%1B%C3%86%7B%2F4mC%C2%B1%60%18_G%C2%86Q%3C%C2%86%C2%BA'%C2%B8%C3%8CT%C3%B3%C3%97%0Ea%C3%A4C%C3%B4BUs%1E%C2%80%7D%13%C3%8E%C2%AF%C2%AAZd%17.%C2%B6%C2%A0%C3%ABQ%0Dk%C3%A1%C2%92T'n%C2%8D%C3%87%C3%A1%C3%AD%14%C3%9AB%C3%90q%03-%C3%8B%C3%A5%C2%9EU%C3%B69y%C2%80%C3%A0%C2%86%7C%C3%955%C3%AC%C3%ADC%C2%9F%C2%9C%C2%B7%C2%AF%C3%BC%00%C2%BE%C2%A9h%0EN%C3%BF%C2%96%C2%B4%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%02%3FIDATX%C2%85%C3%AD%C2%97%3DkTA%14%C2%86%C2%9F%C2%A3%16%C3%99%C2%A8(%C2%89%C2%95%11%C2%96%14~%C2%82%24%16%C2%8A%C2%8D%C2%85%C2%B8%16b%13%17%2C%02%16%C3%BE%03%0B%1Bm%C2%B4%11%C3%91B%10%C3%B1%07h!X%24%C2%A2%08%0Ab%2Bh%C2%A2%60%16%C3%85%0F%C2%8C%18%10%2C%C2%8C%C2%B0%5BH%12%24%C2%BE%16%C3%B7%C2%8C%C2%8C%C3%AB%C3%AE%C3%A6%C3%9E%C2%9B%C3%9D%C3%95%22%2F%2Csg%C3%B6%C3%8E9%C3%8F%C3%8C%C3%8E%C2%99%3D%07%C3%BE%C2%B1%2C%C3%AEH2%60%18%C3%98%C3%90f%3F%C3%B3%C3%80%C2%A4%C2%99-6%7DC%C3%92aI%15uN%0F%24%C3%B54%C3%9C%01_%C3%B9%14%C2%B0%13%C2%B8%07T%C3%BD%C3%BB%12P%04%C3%AE%02%C3%9F%C2%80%C2%93%C3%80%0F%C3%A0V%C2%8AU%C3%B7%03%23%C3%80%0C0%07%C3%AC%00%1E%02e3%C2%9B%C2%AF_%C3%BD%1E%C2%A7%1C%C2%AB%1B%1F%C3%B7%C3%B1!%C3%AF%7F%C2%97%C3%B4%25%C2%85s%24%0D%C3%B9%C3%9CqI%C2%9B%24M5%C3%9A%C2%89U%C3%9E%C2%86%C3%9F%C2%BC%C3%BA%C2%B7%C2%A9%C3%A5%C3%8B%C3%8Cf%C2%81C%40%058%02%C3%9C%C2%91%C2%B4%3A%06%C3%A8%C2%B8%22%C2%88%C2%B7%0E%C2%B1%C2%B7%C2%AB%00%11%C3%84%13%C3%AF%C3%B6d%01X%1B%3D%17%C3%82%C3%B6e%C2%98%C3%93TkR%02%C3%9C%C2%97%C3%B4%19(%00%C2%BD%C3%80%C2%B4%C2%A4%C3%9A%12s%C2%B6%C2%B4%03%60%02(%03%7D%C3%BE%09*%C2%A61%1E%C3%99%C3%88%07%60f%C2%97%25%5D%23%C3%BFY%C3%B9ifs%C2%B9%01%1C%C2%A2%C2%A5%C2%81%C3%A5%C2%AA%C2%ABQ%C2%B0%02%C2%B0%02%C3%B0_%02%C2%B4%0CC%C3%8F%13%C2%8A%40%C2%9A%C2%AB%C2%B7%C2%91%16%C2%81%193S.%00%C3%A0%22p%26%C2%A7%C3%B3%C2%A0K%C3%80%C3%99%C2%BC%00%C3%9B%C2%BC%C3%BD%08%7C%C3%88%C3%A8x%2B0%18%C3%99%C3%88%05%104jf%13%C2%92%C2%B6%03%0Bf%C3%B6IR%1F%C2%B0%3B%02%2C%00%03%C3%80%2B3%C3%BB*i%1F%C3%B0l)%C3%83i%0F%C3%A1%C2%82%C2%B7W%C2%80%C3%AB%C3%BE%C2%BC%1F%C2%B8%C3%A0%10%C2%9B%C2%81%C3%93%C3%80Q%C3%A0%C2%B6%C2%A4R4%C2%A7-%00H%1A%20IL%0B%C2%92%C3%BA%7D%C2%B8%0A%C2%BC'I%3C%01%26%C2%817d%C3%B8%C2%B7%C3%8C%12%C2%86e%C2%92-%5EG%C2%92%C3%AD%02%C2%ACwg%C2%BD%C3%9E%1F%05%0E%027%3A%01p%C2%8C%24%22%C3%8E%03%C3%87%7Dl%C2%96%24%C3%91%0C%05%C3%8EU%C3%A0%11p*%C2%AD%C3%91p%08Cv%C2%B3%C2%B1%C3%89%7B%06%C3%9C4%C2%B3%C3%A7~7%0C%02%C3%AF%C2%80%C2%A7%C3%80%01%C3%A0%050%06L%03%C3%A7%C2%80%13%C3%94U%5D%C2%91%C2%82%C2%8FZ0%1C%17%26%C2%BBH%C2%8A%C2%90f%C2%85I%16%C3%85%C2%85%C3%89%C3%A3%C3%88%C3%B9%08%C3%B0%1A%18%C3%BE%C3%A3%C2%82%C2%92TRgK%C2%B3%C2%A0%C2%8AG%C3%89%C3%AF%C2%AD%C2%8D!%3AU%C2%9C%06%C3%95%C2%80%C2%97%C2%AD%C2%AE%C3%A6%C2%AE%C3%AB%17%C3%83%C2%95%C2%96%2B%3E%5Ev%C2%93%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var SettingsIconCode    = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%20%08%06%00%00%00szz%C3%B4%00%00%01%1BiTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%0A%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22XMP%20Core%205.5.0%22%3E%0A%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%0A%20%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%2F%3E%0A%20%3C%2Frdf%3ARDF%3E%0A%3C%2Fx%3Axmpmeta%3E%0A%3C%3Fxpacket%20end%3D%22r%22%3F%3E%1AJ%C2%AB%C3%AA%00%00%01%C2%82iCCPsRGB%20IEC61966-2.1%00%00(%C2%91u%C2%91%C3%8F%2BDQ%14%C3%87%3F3%C2%83%C2%99%C3%BC%C2%88baa14%C2%AC%C2%90%1F5%C2%B1%C2%B1%C2%98%C2%89%C2%A1%C2%B0%18O%C3%B9%C2%B5%C2%99y%C3%A6%C2%87%C2%9A7%C3%B3z%C3%AFI%C2%B2U%C2%B6%C2%8A%12%1B%C2%BF%16%C3%BC%05l%C2%95%C2%B5RDJV%16%C3%96%C3%84%06%3D%C3%A7yj%24sn%C3%A7%C2%9E%C3%8F%C3%BD%C3%9E%7BN%C3%B7%C2%9E%0B%5E%25%C2%A7jfY%17hy%C3%8B%C2%88%C3%87%22%C3%81%C2%A9%C3%A9%C2%99%C2%A0%C3%BF%11%2F%15%04h%C2%A6)%C2%A1%C2%9A%C3%BA%C3%98%C3%84%C2%90BI%7B%C2%BB%C3%81%C3%A3%C3%84%C2%AB%0E%C2%A7V%C3%A9s%C3%BFZ%C3%95%7C%C3%8AT%C3%81%13%10%1EPu%C3%83%12%1E%16%1E%5D%C2%B2t%C2%877%C2%85%1B%C3%94lb%5E%C3%B8X%C2%B8%C3%9D%C2%90%0B%0A_%3Bz%C3%92%C3%A5'%C2%873.%7F8l(%C3%B1(x%C3%AB%C2%84%C2%83%C2%99_%C2%9C%C3%BC%C3%85j%C3%96%C3%90%C2%84%C3%A5%C3%A5%C2%84%C2%B4%C3%9C%C2%A2%C3%BAs%1F%C3%A7%25%C3%95%C2%A9%C3%BC%C3%A4%C2%84%C3%84%16%C3%B1%26L%C3%A2%C3%84%C2%88%10d%C2%84A%C2%A2%C2%84%C3%A9%C2%A6_%C3%A60%1D%C3%B4%C3%90)%2BJ%C3%A4w%7D%C3%A7%C2%8FS%C2%90%5CUf%C2%9De%0C%16%C3%88%C2%90%C3%85%C2%A2%5D%C3%94E%C2%A9%C2%9E%C2%92%C2%98%16%3D%25%23%C3%87%C2%B2%C3%93%C3%BF%C2%BF%7D5%C3%93%C2%BD%3Dn%C3%B5%C3%AA%08%C2%94%3F%C3%98%C3%B6K%2B%C3%B87%C3%A0s%C3%9D%C2%B6%C3%9F%C3%B7m%C3%BB%C3%B3%00%7C%C3%B7p%C2%96%2F%C3%A6%17%C3%B6%C2%A0%C3%AFU%C3%B4%C3%B5%C2%A2%16%C3%9A%C2%85%C3%9AU89%2Fj%C3%89-8%5D%C2%83%C3%86%3B%3Da%24%C2%BE%25%C2%9F%C2%B87%C2%9D%C2%86%C3%A7%23%C2%A8%C2%99%C2%86%C3%BAK%C2%A8%C2%9Cu%7B%C3%B6%C2%B3%C3%8F%C3%A1-(%2B%C3%B2U%17%C2%B0%C2%BD%03mr%C2%BEv%C3%AE%0B8%C2%B8g%C3%91%C3%A4%C3%A3%C3%AB%C2%A4%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%02%C3%A2IDATX%C2%85%C2%AD%C2%97%C3%8BKUQ%14%C3%86%C2%BF%C3%A5%03.%259%C2%92%C3%8A%14%C2%85%C2%A2%C2%A0%3B%10%C2%B3%C3%B0%C3%95%C2%B0%C2%A0%7FA1h%26%C3%8E%C3%BC%13%1A8j%C3%90u%C3%A0%C2%A4%C2%81S'BAM%C2%82n%C2%83%06%26B%C2%96%19B%C2%A0%C2%824%13s%10%C2%A5%C2%A8%C2%A9%C2%BF%06g%C2%9F%C3%9Cm%C3%8F9%C3%B7%C3%9C%C2%9B%1F%1C%C3%B0~%C3%AB%C2%B9%C3%97~%C2%AC%C2%A5%C2%A9%06%00%C2%8D%C2%92%C3%AEH%C2%B2%C2%98%C2%92%C2%B4%60fG%C2%B5%C3%B8%C2%AB%25%C2%81%C2%A7%C2%9C%C3%86D-%C2%BE%C3%AAj%C3%8C%C2%A1%2B'W%7B%02%403p%25E%C3%9C%C2%99%C2%93%13%C3%90%0E%5C%C2%A8*%2B%C2%A0%13%C3%98%00%C3%B6%C2%811%C2%8F%C2%BF%05L%03G%09%5B%C3%B0%1Bx%06ty%C3%BA%C3%A3%C3%80%01%C2%B0%06%C2%B4U%1B%C3%9C%C3%87s%60!!h%1A%C3%A6%C2%80W%01%C2%97%C2%98%C2%84%05%C3%81%C2%9B%25%7D%C2%96%C3%94QU%C3%89%C3%B2c%5DR%C2%97%C2%99%C3%AD%C3%84Dx%06%C2%9A%24%5D%C3%8E%C3%A9%C3%ACP%C3%92%C2%92%C3%BB%0Es%C3%9A%C2%B4J%3A%C2%97%C2%A9%01%C2%8Ce%C2%94%C3%B6%08(%01%C2%BD%40%C3%81%C2%B3)8%C2%AED%C3%B2%C3%B9%C2%88%C3%B1(W%C2%9A%C3%80%C2%8B%04%C3%A3U%600%C2%87%C3%AD%C2%A0%C3%93%0D1%C2%93%C2%A4%C3%9F%C2%90%C3%A2%C2%A75%C3%B8%C2%BD%26%C2%A9%C3%9B%C3%8C~%C2%B9%20-%C2%92%1EH%C3%AAq%C3%B2EI%C2%AF%C3%8Dl%C3%8B%C3%8C%C3%A6%C2%80nI%C2%9F%24%5D%C3%8B%C3%B0%C2%99%C2%BA%C2%82%C2%9E%C2%84%C2%B2%0Fx%C3%B2a%60%3Ba%C2%85%C3%9B%C3%80pP%C2%89p%3Bn%C3%A6I%60%3A0*%05%C3%81%2Ba%C3%88%C3%93%2F%05%C2%B2%C2%A9%C2%A4%C2%80%C2%8DDo%C3%BB%5B%60%3D!%C3%AB%C3%9E%C2%B8%C3%AC%09%2B%7F%C3%AF%C2%BE%C2%B0%12-%C3%8E%C2%A6%2F%C2%90%1D%12%C2%BD%07e%C3%A0%09P%2F%60%20c5%07%C2%B8%C3%93%0E%3C%0Cd%C3%B7%C2%BCE%C3%9C%0Fd%23%C2%8E%2F%10%C2%BD%C2%90i%C2%B8U%C2%A7%C3%A01%0A%C2%B0bf%7B%C3%AE%C3%AF%1E%C2%8F%C2%9F7%C2%B3r%C3%BC%C3%83%C3%8C%C3%9EH%C2%9A%C3%B7%C3%A4%C2%B7%1D%C2%BF'i%25%C3%83%C2%BF%C3%95%C3%9A%0D%C3%8F%0Cu%C2%8A%C2%86%C2%894%149yp%16%3D%C2%BE%3F%C3%9C%02I%C3%BD%C2%9E%C3%BC%C2%83%C3%A3%0B%C2%92%C2%8A%19%C3%BE%11P%0FL%105%C2%8F%2F%09%7BV%C3%AD!%C3%BCN%C3%BA!%3C%00%C2%96%C2%81%C2%97%C3%80c%C3%A0%C3%B4%0E%10%C2%B5T%1Fgy%0D'3%C2%AA%C3%B1%C3%97%C2%A8%2B0%3A%C3%82%7B%C2%82%C2%81%C2%A1%C2%84J%C3%A08%3F%C3%B8%5D%C3%BE%C2%BD%C3%92%C3%87%C3%80%C3%B5%C2%8A%098%C3%A3%C2%B9%C3%80%C3%B9*%C3%90%C3%A4%C3%89%5B%C2%80%11%60%C3%92%7D%23%C2%B8%C2%B2%3By%13%C2%A7%C3%BBA99Zr%02%C3%A10%11'%C3%B1%3F%C3%8Dh6o%C3%B0%C3%B1%04%C3%A3%18q%3B%C3%AE%C3%A3t%3B%C3%AE%C2%A3r%3B%1E%0D%C3%A3%C2%85%13Q%C2%BB%C2%A2%C2%A9%C2%A51G%C2%AE%C2%87%3Ayd%C2%8AJ%C3%AF%C2%AC%3E%C3%B6%25u%C2%98%C3%99fL%C2%84F%3F%24%7D%C2%93t5%C2%87%C2%B3%06U%3F%C2%8AoH%C3%BA%C2%99%C2%A9%01%C2%B4%115%0C%1F3%C3%80%C2%BB%C2%8C%C3%92%C2%86(%03%C2%B3%01%C3%B7%15%C2%B8%C2%94%2BM%2F%C2%89%5D%C2%BC1%0A(%02SD%5D-%C3%84%01%C3%91%C2%8D%C2%B8%C3%A1%C3%A9%C2%8F%02%7BU%05%C3%B7%C2%8C%C3%8F%C3%A3%5D%C2%AD%40%16V%08%609E%C3%B7%22%C2%90%3A%C2%88%C2%A66%233%C3%9B1%C2%B3%C2%AD%14%C3%B1FNNf%C2%B6if%C2%BBU'P%01%1Fsr%15%C2%915%0B%C2%A4%02%C2%A8Wt%03%C3%BC%7F%C3%8F%C2%97%C3%8C%C3%AC%C2%B8Z_%7F%00%C2%8E%C2%88%C2%9BXU%C2%9E*%3A%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var MainForm;

if (this instanceof Panel) {
    MainForm = this;
} else {
    MainForm = new Window("palette", "AERL", undefined, {resizeable: true, closeButton: true});  
}
    /// Set main form parameters 
    //MainForm.preferredSize = [20, 200];
    MainForm.orientation = "column";
    MainForm.margins = 10;
    MainForm.padding = 10;

    /// Top form panel
    MainForm.TopPanel = MainForm.add("group");
    MainForm.TopPanel.orientation = "row";
    MainForm.TopPanel.alignment = ["fill", "top"];
    MainForm.TopPanel.alignChildren = "fill";

    /// Add icon to top panel
    MainForm.TopPanel.LauncherIcon = MainForm.TopPanel.add("image", undefined, File.decode(LauncherIconCode)); 
    //MainForm.TopPanel.LauncherIcon = MainForm.TopPanel.add("image", undefined, "icon_32.png"); 
    MainForm.TopPanel.LauncherIcon.alignment = ["left","top"]; 
    MainForm.TopPanel.LauncherIcon.size = [45, 32];

    /// Add text to top panel
    MainForm.TopPanel.LauncherText = MainForm.TopPanel.add("statictext"); 
    MainForm.TopPanel.LauncherText.text = "AErender Launcher"; 
    MainForm.TopPanel.LauncherText.graphics.font = ScriptUI.newFont("Nexa Bold", "Bold", 18);
    MainForm.TopPanel.LauncherText.alignment = ["left","fill"]; 

    /// Separate two panels with divider
    MainForm.Divider = MainForm.add("panel");
    MainForm.Divider.alignment = "fill";

    /// Add bottom panel
    MainForm.BottomPanel = MainForm.add("group");
    MainForm.BottomPanel.orientation = "column";
    MainForm.BottomPanel.alignment = ["fill", "bottom"];
    MainForm.BottomPanel.alignChildren = "fill";

    /// Save Project Configuration Button
    MainForm.BottomPanel.SaveProjectConfigButtonPanel = MainForm.BottomPanel.add("group");
    MainForm.BottomPanel.SaveProjectConfigButtonPanel.orientation = "row";
    MainForm.BottomPanel.SaveProjectConfigButtonPanel.alignment = ["fill", "top"];
    MainForm.BottomPanel.SaveProjectConfigButtonPanel.alignChildren = "fill";

    MainForm.BottomPanel.SaveProjectConfigButtonPanel.saveButton = MainForm.BottomPanel.SaveProjectConfigButtonPanel.add("iconbutton", undefined, File.decode(ExportIconCode), {style:"button"});
    //MainForm.BottomPanel.SaveProjectConfigButtonPanel.saveButton = MainForm.BottomPanel.SaveProjectConfigButtonPanel.add("iconbutton", undefined, "ExportIcon_32.png", {style:"button"});
    MainForm.BottomPanel.SaveProjectConfigButtonPanel.saveButton.alignment = ["left","top"]; 

    /// Separate icon and text
    MainForm.BottomPanel.SaveProjectConfigButtonPanel.Divider = MainForm.BottomPanel.SaveProjectConfigButtonPanel.add("panel");
    MainForm.BottomPanel.SaveProjectConfigButtonPanel.Divider.alignment = "fill";

    MainForm.BottomPanel.SaveProjectConfigButtonPanel.SaveProjectConfigText = MainForm.BottomPanel.SaveProjectConfigButtonPanel.add("statictext"); 
    MainForm.BottomPanel.SaveProjectConfigButtonPanel.SaveProjectConfigText.text = "Export project configuration"; 
    MainForm.BottomPanel.SaveProjectConfigButtonPanel.SaveProjectConfigText.alignment = ["left","fill"]; 

    /// Open Project in Launcher Button
    MainForm.BottomPanel.SendToLauncherButtonPanel = MainForm.BottomPanel.add("group");
    MainForm.BottomPanel.SendToLauncherButtonPanel.orientation = "row";
    MainForm.BottomPanel.SendToLauncherButtonPanel.alignment = ["fill", "top"];
    MainForm.BottomPanel.SendToLauncherButtonPanel.alignChildren = "fill";

    MainForm.BottomPanel.SendToLauncherButtonPanel.sendButton = MainForm.BottomPanel.SendToLauncherButtonPanel.add("iconbutton", undefined, File.decode(SendIconCode), {style:"button"});
    //MainForm.BottomPanel.SendToLauncherButtonPanel.sendButton = MainForm.BottomPanel.SendToLauncherButtonPanel.add("iconbutton", undefined, "PlayButtonImage_32.png", {style:"button"});
    MainForm.BottomPanel.SendToLauncherButtonPanel.sendButton.alignment = ["left","top"]; 

    /// Separate icon and text
    MainForm.BottomPanel.SendToLauncherButtonPanel.Divider = MainForm.BottomPanel.SendToLauncherButtonPanel.add("panel");
    MainForm.BottomPanel.SendToLauncherButtonPanel.Divider.alignment = "fill";

    MainForm.BottomPanel.SendToLauncherButtonPanel.SendToLauncherText = MainForm.BottomPanel.SendToLauncherButtonPanel.add("statictext"); 
    MainForm.BottomPanel.SendToLauncherButtonPanel.SendToLauncherText.text = "Send project to Launcher"; 
    MainForm.BottomPanel.SendToLauncherButtonPanel.SendToLauncherText.alignment = ["left","fill"]; 

    /// Settings Button
    MainForm.BottomPanel.SettingsButtonPanel = MainForm.BottomPanel.add("group");
    MainForm.BottomPanel.SettingsButtonPanel.orientation = "row";
    MainForm.BottomPanel.SettingsButtonPanel.alignment = ["fill", "top"];
    MainForm.BottomPanel.SettingsButtonPanel.alignChildren = "fill";

    MainForm.BottomPanel.SettingsButtonPanel.settingsButton = MainForm.BottomPanel.SettingsButtonPanel.add("iconbutton", undefined, File.decode(SettingsIconCode), {style:"button"});
    //MainForm.BottomPanel.SettingsButtonPanel.settingsButton = MainForm.BottomPanel.SettingsButtonPanel.add("iconbutton", undefined, "SettingsIcon_32.png", {style:"button"});
    MainForm.BottomPanel.SettingsButtonPanel.settingsButton.alignment = ["left","top"];

    /// Separate icon and text
    MainForm.BottomPanel.SettingsButtonPanel.Divider = MainForm.BottomPanel.SettingsButtonPanel.add("panel");
    MainForm.BottomPanel.SettingsButtonPanel.Divider.alignment = "fill";

    MainForm.BottomPanel.SettingsButtonPanel.SettignsText = MainForm.BottomPanel.SettingsButtonPanel.add("statictext"); 
    MainForm.BottomPanel.SettingsButtonPanel.SettignsText.text = "Settings"; 
    MainForm.BottomPanel.SettingsButtonPanel.SettignsText.alignment = ["left","fill"]; 

    MainForm.onResizing = MainForm.onResize = function () { this.layout.resize (); }
    MainForm.layout.layout (true);

if (MainForm != null && MainForm instanceof Window) {
    MainForm.show();
} else {
    MainForm = this;
} 

/// Settings Form
var SettingsForm = new Window("window", "Launcher Script Settings", undefined, {resizeable: true, closeButton: false});

    SettingsForm.size = [500, 200];
    SettingsForm.margins = 10;
    SettingsForm.padding = 10;

    SettingsForm.TopPanel = SettingsForm.add("group");
    SettingsForm.TopPanel.alignment = ["fill", "top"];
    SettingsForm.TopPanel.orientation = "row";
    SettingsForm.TopPanel.alignChildren = "fill";

    SettingsForm.TopPanel.LauncherPathText = SettingsForm.TopPanel.add("statictext");
    SettingsForm.TopPanel.LauncherPathText.text = "Launcher path"

    SettingsForm.TopPanel.LauncherPath = SettingsForm.TopPanel.add("edittext");
    SettingsForm.TopPanel.LauncherPath.alignment = ["fill", "top"];

    SettingsForm.TopPanel.LauncherPathSelect = SettingsForm.TopPanel.add("button");
    SettingsForm.TopPanel.LauncherPathSelect.alignment = ["right", "top"];
    SettingsForm.TopPanel.LauncherPathSelect.text = "...";
    SettingsForm.TopPanel.LauncherPathSelect.characters = 30;
    SettingsForm.TopPanel.LauncherPathSelect.preferredSize = [25, 25];

    SettingsForm.TopSecondPanel = SettingsForm.add("group");
    SettingsForm.TopSecondPanel.alignment = ["fill", "top"];
    SettingsForm.TopSecondPanel.orientation = "row";
    SettingsForm.TopSecondPanel.alignChildren = "fill";

    //SettingsForm.TopSecondPanel.HorizontalCheckbox = SettingsForm.TopSecondPanel.add("checkbox", undefined, "Enable Horizontal layout")

    SettingsForm.BottomSeparator = SettingsForm.add("panel");
    SettingsForm.BottomSeparator.alignment = ["fill", "bottom"];

    SettingsForm.BottomPanel = SettingsForm.add("group");
    SettingsForm.BottomPanel.orientation = "row";
    SettingsForm.BottomPanel.alignment = ["right", "bottom"];
    //SettingsForm.BottomPanel.alignChildren = "right";

    SettingsForm.BottomPanel.okButton = SettingsForm.BottomPanel.add("button");
    SettingsForm.BottomPanel.okButton.text = "OK";

    SettingsForm.BottomPanel.cancelButton = SettingsForm.BottomPanel.add("button");
    SettingsForm.BottomPanel.cancelButton.text = "Cancel";

    SettingsForm.onResizing = SettingsForm.onResize = function () { this.layout.resize (); }
    SettingsForm.layout.layout (true);

/// Implementation Section ///

function GetCompCount() { 
    var k = 0;
    for (var i = 1; i <= app.project.numItems; i++) {
        if (app.project.item(i) instanceof CompItem) {
            k++;
        }
    }    
    return k;
}

function LoadConfiguration() {
    if (OS == "darwin") {
        var TempFile = new File ("~/Documents/AErender/Script.cfg");
    } else if (OS == "windows") {
        var TempFile = new File ("/c/ProgramData/AErender/Script.cfg");
    }

    if (TempFile != null) {
        TempFile.encoding = "UTF-8";
        TempFile.open("r", "Text", "Error reading configuration");
        var LauncherPath = TempFile.readln();
        TempFile.close();
    }
    return LauncherPath;
}

function SaveConfiguration() {
    var LauncherPath = SettingsForm.TopPanel.LauncherPath.text;
    if (OS == "darwin") {
        var TempFile = new File ("~/Documents/AErender/Script.cfg");
    } else if (OS == "windows") {
        var TempFile = new File ("/c/ProgramData/AErender/Script.cfg");
    }
    if (TempFile != null) {
        TempFile.encoding = "UTF-8";
        TempFile.open("w", "Text", "Error saving configuration");
        TempFile.writeln(LauncherPath);
        TempFile.close();
    }
}

function exec(command) {
    if (OS == "darwin") {
        var execFile = new File ("~/Documents/AErender/Script.command");
        if (execFile != null) {
            execFile.encoding = "UTF-8";
            execFile.open("w", "Text", "Error");
            execFile.writeln(command);
            execFile.close();
            system.callSystem("chmod +x " + execFile.fsName);
            execFile.execute();
        }
    }
    if (OS == "windows") {
        var execFile = new File ("/c/ProgramData/AErender/Script.bat");
        if (execFile != null) {
            execFile.encoding = "UTF-8";
            execFile.open("w", "Text", "Error");
            execFile.writeln("chcp 65001");
            execFile.writeln(command);
            execFile.close();
            execFile.execute();
        }
    }
}

function GetAER() {
    var RootNode = <aer file={app.project.file.fsName} platform={OS}></aer>;
    var CompositionsNode = <compositions count={GetCompCount()}></compositions>;

    for (var i = 1; i <= app.project.numItems; i++) {
        if (app.project.items[i] instanceof CompItem) {
            var CompNode = <comp></comp>;
            var CompNameNode = <name>{app.project.items[i].name}</name>;
            var CompResolutionNode = <resolution>{app.project.items[i].width + "x" + app.project.items[i].height}</resolution>;
            var CompFramerateNode = <framerate>{app.project.items[i].frameRate}</framerate>;
            var CompRangeStartNode = <rangeStart>{(app.project.items[i].workAreaStart * app.project.items[i].frameRate)}</rangeStart>;
            var CompRangeEndNode = <rangeEnd>{((app.project.items[i].workAreaStart * app.project.items[i].frameRate) + (app.project.items[i].workAreaDuration * app.project.items[i].frameRate))}</rangeEnd>;
            
            CompNode.appendChild(CompNameNode);
            CompNode.appendChild(CompResolutionNode);
            CompNode.appendChild(CompFramerateNode);
            CompNode.appendChild(CompRangeStartNode);
            CompNode.appendChild(CompRangeEndNode);

            CompositionsNode.appendChild(CompNode);
        }
    }

    RootNode.appendChild(CompositionsNode);

    return RootNode.toXMLString();
}

MainForm.BottomPanel.SettingsButtonPanel.settingsButton.onClick = function() {
    SettingsForm.show();
}

SettingsForm.TopPanel.LauncherPathSelect.onClick = function() {
    var TmpFile = new File("AErender Launcher");
    var Launcher = TmpFile.openDlg("Select path to AErender Launcher").fsName;

    if (Launcher != "") {
        SettingsForm.TopPanel.LauncherPath.text = Launcher;
    } else {
        alert("Specify a valid Launcher path!");
    }
}

SettingsForm.addEventListener("show", function() {
    SettingsForm.TopPanel.LauncherPath.text = LoadConfiguration();
})

SettingsForm.BottomPanel.okButton.onClick = function() {
    SaveConfiguration();
    SettingsForm.hide();
}

SettingsForm.BottomPanel.cancelButton.onClick = function() {
    SettingsForm.hide();
}

MainForm.BottomPanel.SaveProjectConfigButtonPanel.saveButton.onClick = function() {
    if (app.project.file == null) {
        alert("Project must be saved first!");
        app.project.save();
    }

    var TempFile = new File("Untitled.aer");
    var Config = TempFile.saveDlg("Save Launcher configuration");

    if (Config != null) {
        Config.encoding = "UTF-8";
        Config.open("w", "Text", "Error");
        Config.writeln(GetAER());
        Config.close();
    } else {
        alert("File not assigned! Nothing has been changed!");
    }
}

MainForm.BottomPanel.SendToLauncherButtonPanel.sendButton.onClick = function() {
    var LauncherPath = LoadConfiguration();
    if (app.project.file == null) {
        alert("Project must be saved first!");
        app.project.save();
    }
    if (LauncherPath != null) {
        if (OS == "darwin") {
            var TempFile = new File("~/Documents/AErender/tempConfig.aer");
        } else if (OS == "windows") {
            var TempFile = new File("/c/ProgramData/AErender/tempConfig.aer");
        }
        if (TempFile != null) { 
            TempFile.encoding = "UTF-8";
            TempFile.open("w", "Text", "Error");
            TempFile.writeln(GetAER());
            TempFile.close();
            if (OS == "darwin") {
                LauncherPath = 'open -a "' + LauncherPath + '" --args -aer "' + TempFile.fsName + '" & disown';
                //system.callSystem(LauncherPath);
                exec(LauncherPath);
            } else if (OS == "windows") {
                LauncherPath = '"' + LauncherPath + '" -aer "' + TempFile.fsName + '"';
                exec(LauncherPath);
                //alert(LauncherPath);
                //system.callSystem(LauncherPath);
            }
        } else {
            alert("File not assigned! Nothing has been changed!");
        }
    } else {
        alert("Specify a valid Launcher path!");
    }
}