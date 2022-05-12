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
      uint confirmdate;
      uint producedate;
      uint testdate;
      uint transportdate; 
      bool pending;
      bool returned;
      bool confirmed;
      bool produced;
      bool tested;
      bool transported;
      bool recieved;
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
      uint confirmdate,
      uint producedate,
      uint testdate,
      uint transportdate, 
      bool pending,
      bool returned,
      bool confirmed,
      bool produced,
      bool tested,
      bool transported,
      bool recieved
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
     order.confirmdate = 0;
     order.testdate = 0;
     order.transportdate = 0;
     order.pending = true;
     order.returned = false;
     order.confirmed = false;
     order.produced = false;
     order.tested = false;
     order.transported = false;
     order.recieved = false;

     emit AddOrder(ordersCount, msg.sender, _product, _quantity,order.orderdate, msg.value, _addressline, _contact, _city, order.review, _zipcode, _state, order.recievedate, order.confirmdate , order.producedate, order.testdate, order.transportdate, order.pending, order.returned, order.confirmed, order.produced, order.tested, order.transported, order.recieved);
    }

    //confirm order
    function confrimOrder(uint _id, string memory _role) public{
      require(_id > 0 && _id <= ordersCount,"order id not valid");
      require(roles[_role] != msg.sender , 'You dont have permission to confirm order');
      OrderItem storage order = orders[_id];
      require(order.confirmed == false);
      order.confirmed = true;
      order.confirmdate = block.timestamp;
      orders[_id] = order;
    }

    //produced order
     function produceOrder(uint _id, string memory _role) public{
      require(_id > 0 && _id <= ordersCount,"order id not valid");
      require(roles[_role] != msg.sender , 'You dont have permission to produce order');
      OrderItem storage order = orders[_id];
      require(order.produced == false);
      order.produced = true;
      order.producedate = block.timestamp;
      orders[_id] = order;
    }

    //test order
     function testOrder(uint _id, string memory _role) public{
      require(_id > 0 && _id <= ordersCount,"order id not valid");
      require(roles[_role] != msg.sender , 'You dont have permission to test order');
      OrderItem storage order = orders[_id];
      require(order.tested == false);
      order.tested = true;
      order.testdate = block.timestamp;
      orders[_id] = order;
    }

    //transported order
     function transportOrder(uint _id, string memory _role) public{
      require(_id > 0 && _id <= ordersCount,"order id not valid");
      require(roles[_role] != msg.sender , 'You dont have permission to transport order');
      OrderItem storage order = orders[_id];
      require(order.transported == false);
      order.transported = true;
      order.transportdate = block.timestamp;
      orders[_id] = order;
    }
    
    //add review
     function addReveiw(uint _id, string memory _review) public{
      require(_id > 0 && _id <= ordersCount,"order id not valid");
      OrderItem storage order = orders[_id];
      order.review = _review;
      orders[_id] = order;
    }

    //return order
     function returnOrder(uint _id, string memory _review) public{
      require(_id > 0 && _id <= ordersCount,"order id not valid");
      OrderItem storage order = orders[_id];
      order.review = _review;
      orders[_id] = order;
    }
      
    //recieved order
    function receiveOrder(uint _id) public{
      require(_id > 0 && _id <= ordersCount,"order id not valid");
      OrderItem storage order = orders[_id];
      order.recieved = true;
      orders[_id] = order;
    }

    //get function

     //users get
    //my orders
     function fetchMyOrders() public view returns (OrderItem[] memory) {
      uint totalItemCount = ordersCount;
      uint itemCount = 0;
      uint currentIndex = 0;

      for (uint i = 0; i < totalItemCount; i++) {
        if (orders[i + 1].owner == msg.sender) {
          itemCount += 1;
        }
      }

      OrderItem[] memory items = new OrderItem[](itemCount);
      for (uint i = 0; i < totalItemCount; i++) {
        if (orders[i + 1].owner == msg.sender) {
          uint currentId = i + 1;
          OrderItem storage order = orders[currentId];
          items[currentIndex] = order;
          currentIndex += 1;
        }
      }
      return items;
    }

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