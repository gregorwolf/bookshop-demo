SELECT count (1) AS "$count"
FROM localized_CatalogService_Orders _parent_1
WHERE EXISTS (
        SELECT 1
        FROM localized_CatalogService_OrderItems _foreign_1
        WHERE book.author.country_code = ?
            AND (_parent_1.ID = _foreign_1.parent_ID)
    )
    AND (
        createdBy = ?
        AND 5 > 2
    ) [ 'GB', 'bob' ] [hana] -
SELECT b.ID AS "b_ID",
    b.parent_ID AS "b_parent_ID",
    b.itemNo AS "b_itemNo",
    b.book_ID AS "b_book_ID",
    b."PRODUCT" AS "b_product",
    b.amount AS "b_amount",
    b.netAmount AS "b_netAmount",
    c.createdAt AS "c_createdAt",
    c.modifiedAt AS "c_modifiedAt",
    c.ID AS "c_ID",
    c.title AS "c_title",
    c.descr AS "c_descr",
    c.genre_ID AS "c_genre_ID",
    c.stock AS "c_stock",
    c.price AS "c_price",
    c.currency_code AS "c_currency_code",
    ? AS "c_virtualFromDB",
    null AS "c_semanticURLtoPublisher",
    c.weight AS "c_weight",
    c.height AS "c_height",
    c.width AS "c_width",
    c.visible AS "c_visible",
    c.releaseDate AS "c_releaseDate",
    c.readingTime AS "c_readingTime",
    c.author_ID AS "c_author_ID",
    c.publisher_ID AS "c_publisher_ID",
    null AS "c_VirtualFromSrv",
    d.createdAt AS "d_createdAt",
    d.modifiedAt AS "d_modifiedAt",
    d.ID AS "d_ID",
    d.name AS "d_name",
    d.dateOfBirth AS "d_dateOfBirth",
    d.dateOfDeath AS "d_dateOfDeath",
    d.placeOfBirth AS "d_placeOfBirth",
    d.placeOfDeath AS "d_placeOfDeath",
    d.alive AS "d_alive",
    d.country_code AS "d_country_code",
    filterExpand.ID AS "filterExpand_ID"
FROM localized_CatalogService_OrderItems b
    INNER JOIN (
        SELECT DISTINCT ID
        FROM (
                SELECT a.ID AS ID
                FROM localized_CatalogService_Orders a
                WHERE EXISTS (
                        SELECT 1
                        FROM localized_CatalogService_OrderItems _foreign_1
                        WHERE book.author.country_code = ?
                            AND (a.ID = _foreign_1.parent_ID)
                    )
                    AND (
                        a.createdBy = ?
                        AND 5 > 2
                    )
                ORDER BY a.ID ASC
                LIMIT 100 OFFSET 0
            )
    ) filterExpand ON (filterExpand.ID = b.parent_ID)
    LEFT JOIN localized_CatalogService_Books c ON (c.ID = b.book_ID)
    LEFT JOIN localized_CatalogService_Authors d ON (d.ID = c.author_ID)