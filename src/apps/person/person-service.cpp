#include "person-service.h"

const char* getPeople() {
  Persons* persons = new Persons();

  Person* person1 = persons->add_persons();
  person1->set_name("Joe");
  person1->set_address("Test Street1");

  Person* person2 = persons->add_persons();
  person2->set_name("Peter");
  person2->set_address("Test Street2");
  
  Person* person3 = persons->add_persons(); 
  person3->set_name("Jane");
  person3->set_address("Test Street3");
  
  Person* person4 = persons->add_persons();
  person4->set_name("Mary");
  person4->set_address("Test Street4");
  
  google::protobuf::util::JsonPrintOptions options;
  std::string result;

  MessageToJsonString(*persons, &result, options);

  const char * res = result.c_str();

  delete persons;

  return res; 
}
