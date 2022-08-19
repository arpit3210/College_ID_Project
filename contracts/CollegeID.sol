// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract CollegeID {
    
  address admin;
  
  constructor() {
    admin = msg.sender;    
  }
  
  modifier onlyAdmin {
      require(msg.sender == admin, "Only College admin can Issue students id cards");
      _;
  }
  
  struct studentid {
      string StudentName;
      string Branch;
      string CollegeName;
      string year;
  }
  
  mapping (string => studentid) public studentidDetails;
  
  function newCollegeid (
      string memory _StudentID,
      string memory _StudentName,
      string memory _Branch,
      string memory _CollegeName,
      string memory _year
     ) public onlyAdmin {
          studentidDetails[_StudentID] = studentid(
                                                    _StudentName,
                                                    _Branch,
                                                    _CollegeName,
                                                    _year);
      }
}


