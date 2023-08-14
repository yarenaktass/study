using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class IdentityAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "33f642f1-a9b0-490d-bfba-95b9a16fed8c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "85142657-651d-4843-b8a3-c9b82d67bafb");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1008daf1-7708-4d20-8bee-077677794066", null, "Member", "MEMBER" },
                    { "55d45d15-c55e-47cb-94ea-25a06a0c8fa9", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1008daf1-7708-4d20-8bee-077677794066");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "55d45d15-c55e-47cb-94ea-25a06a0c8fa9");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "33f642f1-a9b0-490d-bfba-95b9a16fed8c", null, "Member", "MEMBER" },
                    { "85142657-651d-4843-b8a3-c9b82d67bafb", null, "Admin", "ADMIN" }
                });
        }
    }
}
