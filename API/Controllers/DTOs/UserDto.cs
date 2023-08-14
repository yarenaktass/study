using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Controllers.DTOs
{
    public class UserDto
    {
        public string Email {get; set; }
        public string Token {get; set; }
        public  BasketDto Basket { get; set; }
    }
}