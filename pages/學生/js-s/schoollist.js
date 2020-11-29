angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
   
 { schoolNum: '美國', name: '匹茲堡州立大學(Pittsburg State University)', id: '4',tel: '托福(TOEFL):79 (聽:15 說:15 讀:24 寫:15) 或雅思(IELTS):6.5 (聽:5 說:5 讀:5 寫:5) (資格不符)限:學士班 限:在校平均分數高於:75',num: '1'},
  
 { schoolNum: '美國', name: '天普大學(自費)', id:  '10',tel: '',num: '2'},
  
 { schoolNum: '德國', name: '雷根斯堡大學University of Regensburg', id: '2',num: '1'},
   
 { schoolNum: '日本', name: '武藏野大學Musashino University', id: '2',num: '4'},

 { schoolNum: '澳大利亞', name: '澳洲聖母大學University of Notre Dame Australia', id: '2',num: '4'},

 { schoolNum: '西班牙', name: '穆爾西亞聖安東尼奧天主教大學Universidad Católica San Antonio de Murcia', id: '1',num: '4'},

 { schoolNum: '英國', name: '里茲大學University of Leeds', id: '2',num: '4'},

 { schoolNum: '法國', name: 'KEDGE高等商業學院 KEDGE Business School', id: '2',num: '4'},

 { schoolNum: '韓國', name: '梨花女子大學Ewha Womans University', id: '2',num: '4'},

{ schoolNum: '墨西哥', name: '伊比利美洲大學Universidad Iberoamericana', id: '2',num: '1'},
  ];
  
});