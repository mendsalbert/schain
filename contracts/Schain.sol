pragma solidity ^0.8.4;
import "hardhat/console.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@chainlink/contracts/src/v0.8/interfaces/FeedRegistryInterface.sol";

contract Schain {

    using SafeCast for int256;
    using SafeMath for uint256;

    AggregatorV3Interface internal eth_usd_price_feed;

    //roles and address
    mapping(string => address ) users;
    mapping(uint256 => OrderItem ) orders;

    uint public usersCount = 0;
    uint public ordersCount = 0;
    unit public orderConfirmed = 0
    uint public ordersRecieved = 0;


    constructor(){
      //  registry = FeedRegistryInterface(0xd441F0B98BcF34749391A3879A94caA95ffDB74D);
     eth_usd_price_feed = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
    }

    struct OrderItem{
      uint id;
      address owner;
      string name;
      uint quantity;
      uint orderdate;
      uint recievedate;
      uint producedate;
      uint testdate;
      uint transportdate; 
      uint price;
      string addressLine;
      string contact;
      string city;
      string review;
      string zipcode;
      string state;
      bool pending;
      bool returned;
      bool confirmed;
      bool produced;
      bool tested;
      bool transported;
    }

    //modified functions

    //add role
    //add order
    //confirm order
    //test order
    //produced order
    //transported order
    //add review

    //get function

     //users get
    //my orders
    //my pending
    //my returns

    //all orders
    function fetchOrderItems() public view returns (OrderItem[] memory){

    }

    //all roles
    //all pending
    //all customers
    //all confrimed
    //all unconfirmed
    //all produced 
    //all unproduced
    //all tested
    //all untested
    //all shipped
    //all unshiped


}