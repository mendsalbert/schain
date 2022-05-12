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
    mapping(string => address ) roles;
    mapping(uint256 => OrderItem ) orders;

    uint public usersCount = 0;
    uint public ordersCount = 0;
    uint private rolesCount = 0;
    address payable companyAddress;
    // uint public orderConfirmed = 0;
    // uint public ordersRecieved = 0;


    constructor(){
     companyAddress = payable(msg.sender);
     eth_usd_price_feed = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
    }

    struct OrderItem{
      uint id;
      address owner;
      string product;
      uint quantity;
      uint orderdate;
      uint price;
      string addressLine;
      string contact;
      string city;
      string review;
      string zipcode;
      string state;
      uint recievedate;
      uint producedate;
      uint testdate;
      uint transportdate; 
      bool pending;
      bool returned;
      bool confirmed;
      bool produced;
      bool tested;
      bool transported;
    }

    event AddOrder (
      uint256 indexed id,
      address  owner,
      string product,
      uint quantity,
      uint orderdate,
      uint price,
      string addressLine,
      string contact,
      string city,
      string review,
      string zipcode,
      string state,
      uint recievedate,
      uint producedate,
      uint testdate,
      uint transportdate, 
      bool pending,
      bool returned,
      bool confirmed,
      bool produced,
      bool tested,
      bool transported
    );

    event RoleAdded (
      string  role,
      address roleaddress
    );


      //get EthUsd
    function getEthUsd() public  view returns (uint) {
        (
            , int price, , , 
        ) = eth_usd_price_feed.latestRoundData();
        return price.toUint256();
     }

    //convert eth to USD
    function convertEthUsd(uint _amountInUsd) public view returns (uint) {
        uint EthUsd = getEthUsd();
        return _amountInUsd.mul(10 ** 16).div(EthUsd);
     }

    //modifier functions

    //add role
     function addRole(string memory _role, address _roleaddress) public payable {
       require(_roleaddress == roles[_role], "Role has been added already");
       roles[_role] = _roleaddress;
       rolesCount++;
       emit RoleAdded(_role, _roleaddress);
     }

    //add order
    function addOrderItem(
      string memory _product, 
      uint _quantity, 
      string memory _addressline,
      string memory _contact,
      string memory _city,
      string memory _zipcode,
      string memory _state  
    ) public payable {
     require(msg.value > 0, "Price must be at least 1 wei");
     require(_quantity > 0, "quantity must be greater than 0");
     require(msg.sender != address(0x0));
     ordersCount++;
     OrderItem storage order = orders[ordersCount];
     order.id = ordersCount;
     order.owner = payable(address(msg.sender));
     order.product = _product;
     order.quantity = _quantity;
     order.orderdate = block.timestamp;
     order.price = msg.value;
     order.addressLine = _addressline;
     order.contact = _contact;
     order.city = _city;
     order.review = '';
     order.zipcode = _zipcode;
     order.state = _state;
     order.recievedate = 0;
     order.producedate = 0;
     order.testdate = 0;
     order.transportdate = 0;
     order.pending = true;
     order.returned = false;
     order.confirmed = false;
     order.produced = false;
     order.tested = false;
     order.transported = false;
     emit AddOrder(ordersCount, msg.sender, _product, _quantity,order.orderdate, msg.value, _addressline, _contact, _city, order.review, _zipcode, _state, order.recievedate, order.producedate, order.testdate, order.transportdate, order.pending, order.returned, order.confirmed, order.produced, order.tested, transported);
    }

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