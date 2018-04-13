## 目的

主要是為了說明如何同時在一個專案裡使用Java與React，讓React取代Java開發常用的JSP。
使用了

1. h2 data base，使用記憶體模式，以```jdbc:h2:tcp://localhost/mem:rest```做為連結的url，若有需要變動，記得修改``system.properties```。
2. Spring，本想使用SpringBoot或Spring WebFlux，不過還是等下次吧..
3. React，都在src/main/react目錄下
4. 

## 產生war檔

執行```mvn package```即可，同時可以產生react需要的index.bundle.js，也會產生.war

## 開發方式

這部份建議借助ide

1. 執行```h2``，啟動h2做為database
2. 執行```mvn install```，此時因為加了```--watch```，所以接下來只要修改任```react```目錄下的檔案，webpack都會重新編譯產生index.bundle.js到```/target/rest/resources/js```下。
3. 例用ide起動Java Servlet Server像```Tomcat```之類。

如果Server能自動偵測```/target/rest/resources/js/index.bundle.js```有變動而自動載入最好，如果沒有，ide上通常有update的按鈕，按一下也不算太麻煩。
Browser記得取消Cache，不然修改後無法載入也是白忙。
