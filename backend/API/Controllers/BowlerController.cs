using API.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("[controller]")]
    [ApiController]

    public class BowlerController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;

        public BowlerController(IBowlerRepository temp)
        {
            _bowlerRepository = temp;
        }

        [HttpGet]
        public IEnumerable<Object> GetBowlers()
        {
            // Include Team data in the query
            var data = (from bowler in _bowlerRepository.Bowlers
                        join team in _bowlerRepository.Teams
                        on bowler.TeamID equals team.TeamID
                        where team.TeamName == "Marlins" | team.TeamName == "Sharks"
                        select new
                        {
                            BowlerID = bowler.BowlerID,
                            BowlerFirstName = bowler.BowlerFirstName,
                            BowlerMiddleInit = bowler.BowlerMiddleInit,
                            BowlerLastName = bowler.BowlerLastName,
                            TeamName = team.TeamName,
                            BowlerAddress = bowler.BowlerAddress,
                            BowlerCity = bowler.BowlerCity,
                            BowlerState = bowler.BowlerState,
                            BowlerZip = bowler.BowlerZip,
                            BowlerPhoneNumber = bowler.BowlerPhoneNumber
                        }).ToArray();
            return data;
        }

    }
}