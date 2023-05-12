package com.oguogu.m59s.repository;

import com.oguogu.m59s.entity.Game;
import com.oguogu.m59s.entity.GameImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameImageRepository extends JpaRepository<GameImage, Long> {
}
