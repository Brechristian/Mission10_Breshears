﻿using System.Linq;

namespace API.Data
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private readonly BowlerContext _bowlerContext;

        public EFBowlerRepository(BowlerContext temp)
        {
            _bowlerContext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _bowlerContext.Bowlers;
        public IEnumerable<Team> Teams => _bowlerContext.Teams;
    }
}
